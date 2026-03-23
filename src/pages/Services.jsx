import Layout from '../components/Layout/Layout';

const Services = () => {
    const alwaysFree = [
        'Quick safety check',
        'Tyre pressure check',
        'Basic brake inspection',
        'Gear indexing check',
    ];

    const serviceTiers = [
        {
            title: 'Repair Visit',
            subtitle: 'You only pay for what needs fixing',
            price: 'From price list',
            highlight: false,
            note: 'Bring your bike in for any repair and the basics below are on us — no hidden costs.',
            features: alwaysFree.map(f => ({ label: f, free: true })),
        },
        {
            title: 'Full Bike Service',
            subtitle: 'Complete planned maintenance',
            price: '€60',
            highlight: true,
            note: 'Ideal for a full annual overhaul — everything checked, cleaned and tuned.',
            features: [
                { label: 'Deep clean', free: false },
                { label: 'Bearings greased', free: false },
                { label: 'Wheel truing', free: false },
                { label: 'New cables (if needed)', free: false },
                { label: 'Full safety report', free: false },
                { label: 'All basic checks included', free: true },
            ],
        },
        {
            title: 'E-Bike Services',
            subtitle: 'Mechanical repairs available now',
            price: 'From price list',
            highlight: false,
            note: 'Electrical diagnostics and battery services coming soon.',
            features: [
                { label: 'Mechanical repairs', free: false },
                { label: 'Brake & gear adjustment', free: false },
                { label: 'Wheel & frame checks', free: false },
                { label: '🔜 Battery health check', free: false, soon: true },
                { label: '🔜 Electrical diagnostics', free: false, soon: true },
            ],
        },
    ];

    const priceList = [
        {
            category: 'Tyres & Tubes', items: [
                { name: 'Binnenband Plakken (Inner tube repair)', price: '€20.00' },
                { name: 'Binnenband vervangen (Inner tube replacement)', price: '€25.00' },
                { name: 'BIB + BUB vervangen — normal', price: '€50.00' },
                { name: 'BIB + BUB vervangen — anti-lek', price: '€65.00' },
            ]
        },
        {
            category: 'Chain & Drivetrain', items: [
                { name: 'Ketting aanspannen / opleggen (Chain tighten/fit)', price: '€15.00' },
                { name: 'Ketting vervangen — normal', price: '€25.00' },
                { name: 'Ketting vervangen — anti-roest', price: '€35.00' },
                { name: 'Trapas vervangen (Bottom bracket replacement)', price: '€65.00' },
            ]
        },
        {
            category: 'Lights & Stand', items: [
                { name: 'Koplamp vervangen (Front light replacement)', price: '€15.00' },
                { name: 'Achterlamp vervangen (Rear light replacement)', price: '€10.00' },
                { name: 'Standaard vervangen — eenpoot (Single kickstand)', price: '€20.00' },
                { name: 'Standaard vervangen — tweepoot (Double kickstand)', price: '€45.00' },
            ]
        },
        {
            category: 'Brakes', items: [
                { name: 'Remblokjes vervangen — voor of achter (Front or rear brake pads)', price: '€15.00' },
                { name: 'Remblokjes vervangen — voor en achter (Both brake pads)', price: '€30.00' },
                { name: 'Remkable vervangen — voor of achter (Brake cable)', price: '€20.00' },
                { name: 'Rem afstelling — normal (voor of achter)', price: '€5.00' },
                { name: 'Rem afstelling — schijfrem (voor of achter)', price: '€10.00' },
            ]
        },
        {
            category: 'Other Repairs', items: [
                { name: 'Kleine slag uit wiel halen (Minor wheel truing)', price: '€25.00' },
                { name: 'Fiets afmonteren (Full bike disassembly)', price: '€50.00' },
                { name: 'Tarief per uur (Hourly rate)', price: '€60.00' },
            ]
        },
    ];

    return (
        <Layout>
            <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '4rem 2rem' }}>

                    {/* Header */}
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                        Our <span className="text-gradient">Services</span>
                    </h1>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Professional care for your bicycle. From quick fixes to complete rebuilds, our certified mechanics treat every bike as their own.
                    </p>

                    {/* "Always free" banner */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(0,200,255,0.08) 0%, rgba(0,200,255,0.03) 100%)',
                        border: '1px solid rgba(0,200,255,0.2)',
                        borderRadius: '12px',
                        padding: '1.75rem 2rem',
                        marginBottom: '4rem',
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '1.5rem',
                    }}>
                        <div style={{ flexShrink: 0 }}>
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.3rem' }}>Always included — free</div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>With every repair visit</div>
                        </div>
                        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', flex: 1 }}>
                            {alwaysFree.map((item, i) => (
                                <span key={i} style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                                    background: 'rgba(0,200,255,0.08)', border: '1px solid rgba(0,200,255,0.15)',
                                    borderRadius: '999px', padding: '0.35rem 0.9rem',
                                    fontSize: '0.875rem', color: 'var(--color-text-muted)',
                                }}>
                                    <span style={{ color: '#4ade80', fontSize: '0.8rem' }}>✓</span> {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Service tiers */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                        {serviceTiers.map((tier, i) => (
                            <div key={i} className="glass-panel" style={{
                                padding: '2.5rem',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                overflow: 'hidden',
                                outline: tier.highlight ? '1px solid var(--color-primary)' : 'none',
                            }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '4px', background: tier.highlight ? 'var(--color-primary)' : 'rgba(255,255,255,0.08)' }} />
                                {tier.highlight && (
                                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--color-primary)', color: '#000', fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', padding: '0.25rem 0.6rem', borderRadius: '999px' }}>
                                        Best Value
                                    </div>
                                )}
                                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{tier.title}</h2>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>{tier.subtitle}</p>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '1rem' }}>{tier.price}</div>
                                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, fontStyle: 'italic' }}>{tier.note}</p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', flex: 1 }}>
                                    {tier.features.map((f, fi) => (
                                        <li key={fi} style={{
                                            display: 'flex', alignItems: 'center', gap: '0.6rem',
                                            padding: '0.6rem 0',
                                            borderBottom: fi < tier.features.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                            color: f.soon ? 'rgba(255,255,255,0.3)' : 'var(--color-text-muted)',
                                            fontSize: '0.9rem',
                                        }}>
                                            {!f.soon && (
                                                <span style={{ color: f.free ? '#4ade80' : 'var(--color-primary)', fontSize: '0.8rem', flexShrink: 0, minWidth: '2.5rem' }}>
                                                    {f.free ? '✓ Free' : '✓'}
                                                </span>
                                            )}
                                            {f.label}
                                        </li>
                                    ))}
                                </ul>
                                <button className="btn" style={{ width: '100%', textAlign: 'center' }}>Book Now</button>
                            </div>
                        ))}
                    </div>

                    {/* Full price list */}
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                            Full <span className="text-gradient">Price List</span>
                        </h2>
                        <p style={{ color: 'var(--color-text-muted)' }}>All prices include labour. Parts extra if needed.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {priceList.map((group, gi) => (
                            <div key={gi} className="glass-panel" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'var(--color-primary)' }} />
                                <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                                    {group.category}
                                </h3>
                                {group.items.map((item, ii) => (
                                    <div key={ii} style={{
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem',
                                        padding: '0.7rem 0',
                                        borderBottom: ii < group.items.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                                    }}>
                                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.4 }}>{item.name}</span>
                                        <span style={{ color: 'white', fontWeight: 600, fontSize: '0.95rem', flexShrink: 0 }}>{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Layout>
    );
};

export default Services;
