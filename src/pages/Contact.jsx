import Layout from '../components/Layout/Layout';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <Layout>
            <div style={{ paddingTop: '80px', minHeight: '100vh' }}>
                <div className="container" style={{ padding: '4rem 2rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '2rem', textAlign: 'center' }}>
                        {t('contact.page_title_1')} <span className="text-gradient">{t('contact.page_title_highlight')}</span>
                    </h1>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                        <div className="glass-panel" style={{ padding: '2rem' }}>
                            <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)' }}>{t('contact.visit_us')}</h2>
                            <address style={{ fontStyle: 'normal', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                                <strong>{t('contact.address.name')}</strong><br />
                                {t('contact.address.street')}<br />
                                {t('contact.address.city')}<br />
                                {t('contact.address.country')}
                            </address>

                            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>{t('contact.opening_hours')}</h3>
                            <ul style={{ listStyle: 'none', color: 'var(--color-text-muted)' }}>
                                <li>{t('contact.hours.week')}</li>
                                <li>{t('contact.hours.sat')}</li>
                                <li>{t('contact.hours.sun')}</li>
                            </ul>
                        </div>

                        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center', textAlign: 'center' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>💬</div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{t('contact.message_us_title')}</h2>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '2rem' }}>
                                {t('contact.message_us_desc')}
                            </p>
                            <a
                                href="https://wa.me/31687072724" // Using a placeholder number, they can update it
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.75rem',
                                    fontSize: '1.1rem',
                                    padding: '1rem 2rem',
                                    background: '#25D366', // WhatsApp green
                                    color: 'white',
                                    border: 'none',
                                    textDecoration: 'none',
                                }}
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.096-1.958-.435-1.543-.642-2.525-2.227-2.602-2.33-.077-.101-.621-.828-.621-1.58 0-.751.391-1.121.528-1.272.138-.152.3-.189.401-.189.101 0 .202.001.29.006.096.005.234-.038.366.279.135.324.457 1.114.498 1.196.04.081.066.176.015.277-.05.101-.076.162-.151.252-.077.089-.163.197-.23.273-.072.08-.148.168-.066.309.083.14.368.605.786.981.539.483 1.002.633 1.142.703.14.07.221.058.303-.035.083-.095.358-.415.454-.558.096-.143.193-.119.32-.072.127.048.804.379.941.448.138.07.23.104.263.162.034.058.034.331-.11.736z" />
                                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.031 18.914c-1.391 0-2.754-.374-3.948-1.082l-.283-.168-2.937.77.785-2.863-.184-.293c-.777-1.237-1.188-2.67-1.187-4.148.002-4.28 3.483-7.76 7.766-7.76 2.074 0 4.024.809 5.489 2.274 1.465 1.465 2.273 3.415 2.273 5.49-.001 4.28-3.483 7.761-7.774 7.761z" />
                                </svg>
                                {t('contact.whatsapp_btn')}
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
};

export default Contact;
