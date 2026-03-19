/**
 * Navbar — top bar on the landing hero
 * Props:
 *  onMenuClick — opens the Sidebar
 *  onBookDemo — opens the demo modal
 */
export default function Navbar({ onMenuClick, onBookDemo }) {
    return (
        <div
            className="navbar fixed top-0 left-0 w-full py-4 px-6 md:py-7 md:px-10 flex justify-between items-center"
            style={{ zIndex: 100, mixBlendMode: 'difference' }}
        >
            <style>{`
                :root {
                    --nav-color: #EAE5D9;
                }
                .nav-link {
                    position: relative;
                    color: var(--nav-color);
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 1px;
                    bottom: -2px;
                    left: 0;
                    background-color: var(--nav-color);
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
            `}</style>
            <button
                className="nav-link"
                onClick={onMenuClick}
                style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: '6px', padding: 0,
                }}
            >
                <span style={{ fontSize: '0.85rem' }}></span> MENU
            </button>

            <div className="hidden md:flex items-center gap-[22px]">
                <a href="#footer-section" className="nav-link">CONTACT US</a>
                <button
                    onClick={onBookDemo}
                    className="nav-link"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    BOOK A DEMO
                </button>
            </div>
        </div>
    );
}
