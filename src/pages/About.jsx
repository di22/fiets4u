import Layout from '../components/Layout/Layout';
import ownerPhoto from '../assets/img/Screenshot 2026-03-23 155934.png';
import shopBike from '../assets/img/Fietsmaker-4-You_af52f273d0d84cffb1afb43e74e7fc67.webp';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    const bullets = t('about.story.bullets', { returnObjects: true });

    const languages = ['🇳🇱 Dutch', '🇬🇧 English', '🇸🇾 Arabic'];
    const facts = [
        { label: t('about.facts.since'), value: '2009' },
        { label: t('about.facts.languages'), value: '3' },
        { label: t('about.facts.years'), value: '5+' },
        { label: t('about.facts.passion'), value: 'Bikes ❤️' },
    ];

    return (
        <Layout>
            <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '5rem 2rem' }}>

                    {/* Page title */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }}>
                            {t('about.head.title')} <span className="text-gradient">{t('about.head.title_highlight')}</span>
                        </h1>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                            {t('about.head.subtitle')}
                        </p>
                    </div>

                    {/* Main story grid */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap-reverse',
                        gap: '5rem',
                        alignItems: 'start',
                        marginBottom: '6rem',
                    }}>
                        {/* Owner photo */}
                        <div style={{ flex: '1 1 300px', minWidth: 0, position: 'relative' }}>
                            <div style={{
                                position: 'absolute',
                                top: '-16px', left: '-16px',
                                width: '100%', height: '100%',
                                border: '2px solid var(--color-primary)',
                                zIndex: 0, borderRadius: '8px',
                            }} />
                            <img
                                src={ownerPhoto}
                                alt="Wasim — owner of Fietsmaker 4 You"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    display: 'block',
                                    borderRadius: '8px',
                                    position: 'relative',
                                    zIndex: 1,
                                    boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
                                    objectFit: 'cover',
                                }}
                            />
                            {/* Fact cards below photo */}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '2rem' }}>
                                {facts.map((f, i) => (
                                    <div key={i} className="glass-panel" style={{ padding: '1rem', textAlign: 'center' }}>
                                        <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.2rem' }}>{f.value}</div>
                                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{f.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Story text */}
                        <div style={{ flex: '1 1 300px', minWidth: 0, paddingTop: '1rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                                {t('about.story.title')} <span className="text-gradient">{t('about.story.title_highlight')}</span>
                            </h2>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                                {t('about.story.p1')}
                            </p>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                                {t('about.story.p2')}
                            </p>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '2rem' }}>
                                {t('about.story.p3')}
                            </p>

                            {/* Language badges */}
                            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
                                {languages.map((lang, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.12)',
                                        borderRadius: '999px',
                                        padding: '0.4rem 1rem',
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-muted)',
                                    }}>
                                        {lang}
                                    </span>
                                ))}
                            </div>

                            {/* Highlights */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {Array.isArray(bullets) && [
                                    { icon: '🔧', text: bullets[0] },
                                    { icon: '🤝', text: bullets[1] },
                                    { icon: '🏠', text: bullets[2] },
                                    { icon: '☕', text: bullets[3] },
                                ].map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                                        <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                                        <p style={{ color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.7 }}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Custom bikes section */}
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '3rem',
                        alignItems: 'center',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.06)',
                        marginBottom: '4rem',
                    }}>
                        <div style={{ flex: '1 1 280px', minWidth: 0 }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                                {t('about.custom.title')} <span className="text-gradient">{t('about.custom.title_highlight')}</span>
                            </h2>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9 }}>
                                {t('about.custom.p1')}
                            </p>
                        </div>
                        <div style={{ flex: '1 1 280px', minWidth: 0, position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '12px', left: '12px', width: '100%', height: '100%', border: '2px solid var(--color-secondary)', zIndex: 0, borderRadius: '4px' }} />
                            <img
                                src={shopBike}
                                alt="Custom bike at Fietsmaker 4 You"
                                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '4px', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.5)' }}
                            />
                        </div>
                    </div>

                    {/* Hospitality callout */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(0,200,255,0.08) 0%, rgba(120,80,255,0.06) 100%)',
                        border: '1px solid rgba(0,200,255,0.2)',
                        borderRadius: '16px',
                        padding: 'clamp(2rem, 5vw, 3rem)',
                        textAlign: 'center',
                    }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>☕</div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
                            {t('about.hospitality.title')} <span className="text-gradient">{t('about.hospitality.title_highlight')}</span>
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto 1.5rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                            {t('about.hospitality.p1')} <strong style={{ color: 'white' }}>{t('about.hospitality.p1_bold')}</strong> {t('about.hospitality.p1_end')}
                        </p>
                        <a href="/contact" className="btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            {t('about.hospitality.btn')}
                        </a>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default About;
