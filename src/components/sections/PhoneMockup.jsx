/**
 * PhoneMockup
 * Right-side panel on the features section.
 * Contains a realistic phone frame with channel notification cards
 * and floating icon badges around the phone edges.
 */
export default function PhoneMockup() {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '540px' }}>
            {/* Wrapper holding both phone and badges relative to phone size */}
            <div style={{ position: 'relative', width: '260px', height: '500px' }}>

                {/* ── Phone Frame ── */}
                <div style={{
                    position: 'relative', width: '100%', height: '100%',
                    background: 'rgba(20,32,12,0.75)',
                    backdropFilter: 'blur(24px)',
                    border: '2px solid rgba(244,237,230,0.18)',
                    borderRadius: '44px',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(244,237,230,0.12)',
                    display: 'flex', flexDirection: 'column',
                    overflow: 'hidden', zIndex: 10,
                }}>
                    {/* Notch */}
                    <div style={{
                        width: '90px', height: '22px',
                        background: 'rgba(20,32,12,0.95)',
                        borderRadius: '0 0 18px 18px',
                        margin: '0 auto',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                    }}>
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'rgba(244,237,230,0.2)' }} />
                        <div style={{ width: '36px', height: '5px', borderRadius: '4px', background: 'rgba(244,237,230,0.15)' }} />
                    </div>

                    {/* Status bar */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 18px 0' }}>
                        <span style={{ color: '#f4ede6', fontSize: '0.62rem', fontWeight: 700, opacity: 0.7 }}>9:41</span>
                        <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
                            <i className="ri-wifi-line" style={{ color: '#f4ede6', opacity: 0.6, fontSize: '0.75rem' }} />
                            <i className="ri-battery-2-charge-line" style={{ color: '#f4ede6', opacity: 0.6, fontSize: '0.75rem' }} />
                        </div>
                    </div>

                    {/* App header */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '10px',
                        padding: '10px 16px 8px',
                        borderBottom: '1px solid rgba(244,237,230,0.10)',
                    }}>
                        <div style={{
                            width: '34px', height: '34px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #5a8a28, #8ab840)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 3px 10px rgba(90,138,40,0.5)',
                        }}>
                            <i className="ri-robot-2-fill" style={{ color: '#f4ede6', fontSize: '1rem' }} />
                        </div>
                        <div>
                            <div style={{ color: '#f4ede6', fontWeight: 700, fontSize: '0.78rem', fontFamily: "'Outfit', sans-serif" }}>Sanjeevani</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#7dcf50' }} />
                                <span style={{ color: '#7dcf50', fontSize: '0.58rem', fontWeight: 600 }}>Active on all channels</span>
                            </div>
                        </div>
                    </div>

                    {/* Channel notification cards */}
                    <div style={{ flex: 1, overflowY: 'hidden', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: '9px' }}>

                        {/* WhatsApp */}
                        <div style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.30)', borderRadius: '16px', padding: '11px 14px', display: 'flex', alignItems: 'center', gap: '11px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '12px', flexShrink: 0, background: 'linear-gradient(135deg, #25D366, #128C7E)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(37,211,102,0.4)' }}>
                                <i className="ri-whatsapp-line" style={{ color: '#fff', fontSize: '1.2rem' }} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#25D366', fontSize: '0.72rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>WhatsApp</span>
                                    <span style={{ color: '#f4ede6', opacity: 0.4, fontSize: '0.58rem' }}>now</span>
                                </div>
                                <p style={{ color: '#f4ede6', opacity: 0.8, fontSize: '0.68rem', margin: '2px 0 0', lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    Your Lisinopril refill is confirmed ✅
                                </p>
                            </div>
                        </div>

                        {/* Telegram */}
                        <div style={{ background: 'rgba(41,182,246,0.10)', border: '1px solid rgba(41,182,246,0.28)', borderRadius: '16px', padding: '11px 14px', display: 'flex', alignItems: 'center', gap: '11px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '12px', flexShrink: 0, background: 'linear-gradient(135deg, #29B6F6, #0288D1)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(41,182,246,0.4)' }}>
                                <i className="ri-telegram-line" style={{ color: '#fff', fontSize: '1.2rem' }} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#29B6F6', fontSize: '0.72rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>Telegram</span>
                                    <span style={{ color: '#f4ede6', opacity: 0.4, fontSize: '0.58rem' }}>1m ago</span>
                                </div>
                                <p style={{ color: '#f4ede6', opacity: 0.8, fontSize: '0.68rem', margin: '2px 0 0', lineHeight: 1.4, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                    Track your order — pickup at 4 PM 🕓
                                </p>
                            </div>
                        </div>

                        {/* Voice Call */}
                        <div style={{ background: 'rgba(244,237,230,0.07)', border: '1px solid rgba(244,237,230,0.18)', borderRadius: '16px', padding: '11px 14px', display: 'flex', alignItems: 'center', gap: '11px' }}>
                            <div style={{ width: '38px', height: '38px', borderRadius: '12px', flexShrink: 0, background: 'linear-gradient(135deg, #607a30, #3d5220)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(96,122,48,0.4)' }}>
                                <i className="ri-phone-line" style={{ color: '#f4ede6', fontSize: '1.2rem' }} />
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: '#f4ede6', fontSize: '0.72rem', fontWeight: 700, fontFamily: "'Outfit', sans-serif" }}>Voice Call</span>
                                    <span style={{ background: 'rgba(125,207,80,0.2)', color: '#7dcf50', fontSize: '0.56rem', fontWeight: 700, padding: '2px 7px', borderRadius: '99px', border: '1px solid rgba(125,207,80,0.3)' }}>LIVE</span>
                                </div>
                                <p style={{ color: '#f4ede6', opacity: 0.8, fontSize: '0.68rem', margin: '2px 0 0', lineHeight: 1.4 }}>
                                    AI agent on call — 0:42 🎙️
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Home bar */}
                    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '12px' }}>
                        <div style={{ width: '100px', height: '4px', borderRadius: '3px', background: 'rgba(244,237,230,0.25)' }} />
                    </div>
                </div>

                {/* ── Floating 3D channel icon badges with text ── */}

                {/* WhatsApp — top-right offset */}
                <div className="hidden sm:flex" style={{
                    position: 'absolute', right: '-80px', top: '50px', zIndex: 20,
                    height: '50px', padding: '0 20px 0 14px', borderRadius: '18px',
                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                    alignItems: 'center', justifyContent: 'center', gap: '8px',
                    boxShadow: '0 15px 35px rgba(37,211,102,0.4), inset 0 3px 6px rgba(255,255,255,0.5), inset 0 -4px 10px rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    transform: 'rotate(4deg)'
                }}>
                    <i className="ri-whatsapp-line" style={{ color: '#fff', fontSize: '1.4rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
                    <span style={{ color: '#fff', fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>WhatsApp</span>
                </div>

                {/* Telegram — top-left offset */}
                <div className="hidden sm:flex" style={{
                    position: 'absolute', left: '-100px', top: '160px', zIndex: 20,
                    height: '50px', padding: '0 20px 0 14px', borderRadius: '20px',
                    background: 'linear-gradient(135deg, #29B6F6, #0288D1)',
                    alignItems: 'center', justifyContent: 'center', gap: '8px',
                    boxShadow: '0 15px 35px rgba(41,182,246,0.4), inset 0 3px 6px rgba(255,255,255,0.5), inset 0 -4px 10px rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,0.4)',
                    transform: 'rotate(-6deg)'
                }}>
                    <i className="ri-telegram-line" style={{ color: '#fff', fontSize: '1.4rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
                    <span style={{ color: '#fff', fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Telegram</span>
                </div>

                {/* Phone Call — bottom-left offset */}
                <div className="hidden sm:flex" style={{
                    position: 'absolute', left: '-80px', bottom: '60px', zIndex: 20,
                    height: '50px', padding: '0 20px 0 14px', borderRadius: '16px',
                    background: 'linear-gradient(135deg, #607a30, #3d5220)',
                    alignItems: 'center', justifyContent: 'center', gap: '8px',
                    boxShadow: '0 15px 35px rgba(96,122,48,0.4), inset 0 3px 6px rgba(255,255,255,0.3), inset 0 -4px 10px rgba(0,0,0,0.25)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transform: 'rotate(5deg)'
                }}>
                    <i className="ri-phone-fill" style={{ color: '#f4ede6', fontSize: '1.4rem', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }} />
                    <span style={{ color: '#f4ede6', fontWeight: 700, fontFamily: "'Outfit', sans-serif", fontSize: '0.85rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Voice Call</span>
                </div>
            </div>
        </div>
    );
}
