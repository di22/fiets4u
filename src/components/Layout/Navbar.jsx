import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsMenuOpen(false);
    };

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
                padding: scrolled ? '1rem 2rem' : '2rem',
                background: scrolled ? 'var(--color-surface-glass)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" onClick={() => setIsMenuOpen(false)} style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'var(--font-header)', letterSpacing: '-0.02em', zIndex: 1001 }}>
                    Fietsmaker<span style={{ color: 'var(--color-primary)' }}>4You</span>
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>

                <div className={`nav-links-container ${isMenuOpen ? 'open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            style={{
                                fontWeight: '500',
                                color: location.pathname === link.path ? 'var(--color-primary)' : 'var(--color-text)',
                                transition: 'color 0.3s ease',
                                fontSize: isMenuOpen ? '1.2rem' : '1rem',
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div style={{
                        display: 'flex',
                        gap: '0.5rem',
                        alignItems: 'center',
                        marginLeft: isMenuOpen ? '0' : '2rem',
                        marginTop: isMenuOpen ? '1rem' : '0'
                    }}>
                        <button 
                            onClick={() => changeLanguage('nl')}
                            style={{ 
                                background: 'transparent',
                                border: 'none',
                                color: i18n.language === 'nl' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                                fontWeight: i18n.language === 'nl' ? '700' : '500',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            NL
                        </button>
                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.8rem' }}>|</span>
                        <button 
                            onClick={() => changeLanguage('en')}
                            style={{ 
                                background: 'transparent',
                                border: 'none',
                                color: i18n.language === 'en' ? 'var(--color-primary)' : 'var(--color-text-muted)',
                                fontWeight: i18n.language === 'en' ? '700' : '500',
                                cursor: 'pointer',
                                fontSize: '1rem'
                            }}
                        >
                            EN
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
