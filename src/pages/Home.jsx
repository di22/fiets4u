import Layout from '../components/Layout/Layout';
import heroBg from '../assets/img/Fietsmaker-4-You_23e85efb9bd3dc484cbb75e72875db37.webp';
import shopBike from '../assets/img/Fietsmaker-4-You_af52f273d0d84cffb1afb43e74e7fc67.webp';
import GoogleReviews from '../components/GoogleReviews/GoogleReviews';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    
    // We get the services array from translations so we map securely over translated objects
    const servicesList = t('home.expertise.services', { returnObjects: true });
    // Same for bullets
    const hospitalityBullets = t('home.hospitality.bullets', { returnObjects: true });
    const icons = ['🌍', '🔧', '🤝', '🏠'];

    return (
        <Layout>
            {/* Hero Section */}
            <section
                style={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        zIndex: -1,
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        background: 'linear-gradient(to right, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.6) 50%, rgba(10,10,10,0.2) 100%)'
                    }} />
                </div>

                <div className="container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
                    <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1rem', maxWidth: '800px' }}>
                        {t('home.hero.title_1')} <br />
                        <span className="text-gradient">{t('home.hero.title_highlight')}</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '600px' }}>
                        {t('home.hero.desc')}
                    </p>
                    <a href="#featured" className="btn">
                        {t('home.hero.cta')}
                    </a>
                </div>
            </section>

            {/* Featured / Vibe Section */}
            <section id="featured" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{t('home.featured.title')}</h2>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                                {t('home.featured.desc')}
                            </p>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>{t('home.featured.stat_1_val')}</h3>
                                    <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('home.featured.stat_1_lbl')}</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2rem', color: 'var(--color-secondary)' }}>{t('home.featured.stat_2_val')}</h3>
                                    <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{t('home.featured.stat_2_lbl')}</p>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                right: '-20px',
                                width: '100%',
                                height: '100%',
                                border: '2px solid var(--color-primary)',
                                zIndex: 0
                            }} />
                            <img
                                src={shopBike}
                                alt="Fietsmaker 4 You – Shop"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    position: 'relative',
                                    zIndex: 1,
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid (Quick Look) */}
            <section style={{ background: 'var(--color-surface)', padding: '8rem 0' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>{t('home.expertise.title')}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {Array.isArray(servicesList) && servicesList.map((service, i) => (
                            <div key={i} className="glass-panel" style={{ padding: '2.5rem', transition: 'transform 0.3s ease' }}>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{service.title}</h3>
                                <p style={{ color: 'var(--color-text-muted)' }}>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Google Reviews Section */}
            <GoogleReviews />

            {/* Hospitality Section */}
            <section style={{ padding: '7rem 0', background: 'var(--color-surface)' }}>
                <div className="container">
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(0,200,255,0.07) 0%, rgba(120,80,255,0.05) 100%)',
                        border: '1px solid rgba(0,200,255,0.15)',
                        borderRadius: '20px',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '3rem',
                        alignItems: 'center',
                    }}>
                        <div>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☕</div>
                            <h2 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>
                                {t('home.hospitality.title_1')} <span className="text-gradient">{t('home.hospitality.title_highlight')}</span>
                            </h2>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                                {t('home.hospitality.desc_1')}
                            </p>
                            <p style={{ color: 'white', fontWeight: 500, fontSize: '1.05rem', lineHeight: 1.8 }}>
                                {t('home.hospitality.desc_2')} <span style={{ color: 'var(--color-primary)' }}> {t('home.hospitality.desc_2_highlight')}</span> {t('home.hospitality.desc_2_end')}
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {Array.isArray(hospitalityBullets) && hospitalityBullets.map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.4rem', flexShrink: 0, marginTop: '2px' }}>{icons[i % icons.length]}</span>
                                    <p style={{ color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.7 }}>{item}</p>
                                </div>
                            ))}
                            <a href="/about" className="btn" style={{ marginTop: '0.5rem', display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
                                {t('home.hospitality.btn')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
