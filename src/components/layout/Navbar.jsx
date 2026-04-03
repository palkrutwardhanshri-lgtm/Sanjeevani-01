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
                .nav-cta {
                    border: 1px solid rgba(234, 229, 217, 0.35);
                    border-radius: 999px;
                    padding: 0.8rem 1.15rem;
                    color: var(--nav-color);
                    font-size: 0.72rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    text-transform: uppercase;
                    transition: transform 0.25s ease, background-color 0.25s ease, border-color 0.25s ease;
                }
                .nav-cta:hover {
                    transform: translateY(-1px);
                    background: rgba(234, 229, 217, 0.08);
                    border-color: rgba(234, 229, 217, 0.55);
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
                    type="button"
                    onClick={onBookDemo}
                    className="nav-cta"
                    style={{
                        background: 'transparent',
                        cursor: 'pointer',
                    }}
                >
                    Book Demo
                </button>
                <a
                    href="https://sanjeevani-console.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    style={{ textDecoration: 'none' }}
                >
                    GET STARTED
                </a>
            </div>
        </div>
    );
}
