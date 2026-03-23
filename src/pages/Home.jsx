import Layout from '../components/Layout/Layout';
import heroBg from '../assets/img/Fietsmaker-4-You_23e85efb9bd3dc484cbb75e72875db37.webp';
import shopBike from '../assets/img/Fietsmaker-4-You_af52f273d0d84cffb1afb43e74e7fc67.webp';
import GoogleReviews from '../components/GoogleReviews/GoogleReviews';

const Home = () => {
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
                        Ride the <br />
                        <span className="text-gradient">Extraordinary</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: '600px' }}>
                        Fietsmaker 4 You brings you the finest selection of premium bicycles in Amsterdam. Experience the perfect blend of performance, style, and comfort.
                    </p>
                    <a href="#featured" className="btn">
                        Explore Collection
                    </a>
                </div>
            </section>

            {/* Featured / Vibe Section */}
            <section id="featured" style={{ padding: '8rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Amsterdam's Finest</h2>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                                At Hagedoornweg 70a, we don't just sell bikes; we curate lifestyles.
                                Whether you need a daily commuter or a high-performance machine, our expert team ensures
                                every ride is smooth, stylish, and tailored to you.
                            </p>
                            <div style={{ display: 'flex', gap: '2rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>5+</h3>
                                    <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Years in Business</p>
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '2rem', color: 'var(--color-secondary)' }}>100%</h3>
                                    <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Customer Satisfaction</p>
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
                    <h2 style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '2.5rem' }}>Our Expertise</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Premium Repairs', desc: 'Expert maintenance for all bike types, ensuring your ride is always safe and smooth.' },
                            { title: 'Custom Builds', desc: 'Create the bike of your dreams with our bespoke customization services.' },
                            { title: 'E-Bike Specialists', desc: 'Mechanical repairs for e-bikes are available now. Electrical repair & diagnostics coming soon!' }
                        ].map((service, i) => (
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
                                Feel at <span className="text-gradient">Home</span>
                            </h2>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                                At Fietsmaker 4 You, you're never just a customer — you're a guest. Owner Wasim runs the shop with genuine warmth and hospitality. Whether you're waiting for a quick repair or just stopping by to browse, the atmosphere is always relaxed and welcoming.
                            </p>
                            <p style={{ color: 'white', fontWeight: 500, fontSize: '1.05rem', lineHeight: 1.8 }}>
                                Don't be shy — <span style={{ color: 'var(--color-primary)' }}> If he's busy working alone, feel free to treat yourself to a drink</span>  while you wait. It's on Wasim. 😊
                            </p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            {[
                                { icon: '🌍', text: 'Speaks Dutch, English & Arabic — always easy to communicate' },
                                { icon: '🔧', text: 'Passionate bike builder & collector with 4+ years in the trade' },
                                { icon: '🤝', text: 'Honest advice, fair prices, no surprise costs' },
                                { icon: '🏠', text: 'Amsterdam resident since 2009 — part of the community' },
                            ].map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                    <span style={{ fontSize: '1.4rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                                    <p style={{ color: 'var(--color-text-muted)', margin: 0, lineHeight: 1.7 }}>{item.text}</p>
                                </div>
                            ))}
                            <a href="/about" className="btn" style={{ marginTop: '0.5rem', display: 'inline-block', textDecoration: 'none', textAlign: 'center' }}>
                                Meet Wasim →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
