import Layout from '../components/Layout/Layout';
import { useTranslation } from 'react-i18next';

const Services = () => {
    const { t } = useTranslation();

    const alwaysFree = t('services.free_banner.items', { returnObjects: true });
    const serviceTiers = t('services.tiers', { returnObjects: true });
    const priceList = t('services.price_list.categories', { returnObjects: true });

    return (
        <Layout>
            <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '4rem 2rem' }}>

                    {/* Header */}
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
                        {t('services.head.title')} <span className="text-gradient">{t('services.head.title_highlight')}</span>
                    </h1>
                    <p style={{ textAlign: 'center', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        {t('services.head.desc')}
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
                            <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-primary)', marginBottom: '0.3rem' }}>
                                {t('services.free_banner.sub')}
                            </div>
                            <div style={{ fontSize: '1.1rem', fontWeight: 600 }}>{t('services.free_banner.title')}</div>
                        </div>
                        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }} />
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', flex: 1 }}>
                            {Array.isArray(alwaysFree) && alwaysFree.map((item, i) => (
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
                        {Array.isArray(serviceTiers) && serviceTiers.map((tier, i) => (
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
                                    {Array.isArray(tier.features) && tier.features.map((f, fi) => (
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
                                <a href="/contact" className="btn" style={{ width: '100%', textAlign: 'center', display: 'inline-block', boxSizing: 'border-box', textDecoration: 'none' }}>
                                    {tier.btn}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Full price list */}
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                            {t('services.price_list.title')} <span className="text-gradient">{t('services.price_list.title_highlight')}</span>
                        </h2>
                        <p style={{ color: 'var(--color-text-muted)' }}>{t('services.price_list.desc')}</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                        {Array.isArray(priceList) && priceList.map((group, gi) => (
                            <div key={gi} className="glass-panel" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'var(--color-primary)' }} />
                                <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-primary)', marginBottom: '1.5rem' }}>
                                    🔧 {group.name}
                                </h3>
                                {Array.isArray(group.items) && group.items.map((item, ii) => (
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
