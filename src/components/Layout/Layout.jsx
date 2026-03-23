import Navbar from './Navbar';

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '4rem' }}>
                <div className="container">
                    <p style={{ color: 'var(--color-text-muted)' }}>&copy; {new Date().getFullYear()} Fietsmaker 4 You. All rights reserved.</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>Hagedoornweg 70a, 1031 BT Amsterdam</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;
