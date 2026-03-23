import Layout from '../components/Layout/Layout';
import ownerPhoto from '../assets/img/Screenshot 2026-03-23 155934.png';
import shopBike from '../assets/img/Fietsmaker-4-You_af52f273d0d84cffb1afb43e74e7fc67.webp';

const About = () => {
    const languages = ['🇳🇱 Dutch', '🇬🇧 English', '🇸🇾 Arabic'];
    const facts = [
        { label: 'In Amsterdam since', value: '2009' },
        { label: 'Languages spoken', value: '3' },
        { label: 'Years in business', value: '5+' },
        { label: 'Passion', value: 'Bikes ❤️' },
    ];

    return (
        <Layout>
            <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '5rem 2rem' }}>

                    {/* Page title */}
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '0.75rem' }}>
                            Meet <span className="text-gradient">Wasim</span>
                        </h1>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
                            The heart behind Fietsmaker 4 You
                        </p>
                    </div>

                    {/* Main story grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '5rem',
                        alignItems: 'start',
                        marginBottom: '6rem',
                    }}>
                        {/* Owner photo */}
                        <div style={{ position: 'relative' }}>
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
                        <div style={{ paddingTop: '1rem' }}>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>
                                A Passion Turned <span className="text-gradient">Purpose</span>
                            </h2>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                                Wasim has always had a deep love for bicycles — not just as a mode of transport, but as works of craft and engineering. Born in Syria and calling Amsterdam home since 2009, he brought that passion with him and turned it into something the whole community could benefit from.
                            </p>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1.25rem' }}>
                                He doesn't just fix bikes — he collects them, studies them, and builds custom bicycles from scratch. Every bike that rolls into the shop gets treated with the same care and attention as if it were his own.
                            </p>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '2rem' }}>
                                Fluent in Dutch, English and Arabic, Wasim makes everyone feel at home — whether you're a local, a tourist, or a fellow bike enthusiast just looking to chat over a cup of coffee.
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
                                {[
                                    { icon: '🔧', text: 'Passionate bike builder — collects and builds custom bicycles' },
                                    { icon: '🤝', text: 'Honest advice, fair prices, no surprise costs' },
                                    { icon: '🏠', text: 'Amsterdam resident since 2009 — a true part of the community' },
                                    { icon: '☕', text: 'Drop in, ask for your free drink, and feel right at home' },
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
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
                        gap: '3rem',
                        alignItems: 'center',
                        padding: 'clamp(2rem, 5vw, 4rem)',
                        background: 'rgba(255,255,255,0.02)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.06)',
                        marginBottom: '4rem',
                    }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
                                Custom <span className="text-gradient">Builds</span>
                            </h2>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9 }}>
                                One of Wasim's greatest joys is building bikes from the ground up. From track bikes to city cruisers, every custom build is a unique collaboration between Wasim and the client — crafted with care, precision and personality.
                            </p>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-12px', right: '-12px', width: '100%', height: '100%', border: '2px solid var(--color-secondary)', zIndex: 0, borderRadius: '4px' }} />
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
                            You're Always <span className="text-gradient">Welcome</span>
                        </h3>
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '560px', margin: '0 auto 1.5rem', lineHeight: 1.8, fontSize: '1.05rem' }}>
                            Wasim believes a bike shop should feel like a second living room. Drop by, say hello, and don't be shy — <strong style={{ color: 'white' }}>ask for your free drink</strong> while we take care of your bike. You're not just a customer here, you're a guest.
                        </p>
                        <a href="/contact" className="btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
                            Find Us →
                        </a>
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default About;
