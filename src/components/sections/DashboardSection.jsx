/**
 * DashboardSection — Page 5
 * Pharmacist command dashboard — KPI cards, inventory, analytics.
 */

import backgroundImage from "../../assets/image/imagebackgrouns.png";

const KPIS = [
    { icon: "ri-shopping-bag-3-line", label: "Orders Today", value: "284", delta: "+12%", color: "#b7c25e" },
    { icon: "ri-money-rupee-circle-line", label: "Revenue", value: "₹1.2L", delta: "+8%", color: "#7dcf50" },
    { icon: "ri-time-line", label: "Pending", value: "18", delta: "-3", color: "#f4c542" },
    { icon: "ri-medicine-bottle-line", label: "Low Stock", value: "7", delta: "Alert", color: "#ff6b6b" },
];

const CHART_BARS = [40, 65, 50, 80, 72, 90, 84];
const CHART_DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const ORDERS = [
    { id: "#RX4821", patient: "Ramesh K.", item: "Metformin 500mg", status: "Delivered", statusColor: "#7dcf50" },
    { id: "#RX4820", patient: "Priya M.", item: "Lisinopril 10mg", status: "Out for Delivery", statusColor: "#b7c25e" },
    { id: "#RX4819", patient: "Arun S.", item: "Atorvastatin 20mg", status: "Processing", statusColor: "#f4c542" },
    { id: "#RX4818", patient: "Seema T.", item: "Paracetamol 500mg", status: "Delivered", statusColor: "#7dcf50" },
    { id: "#RX4817", patient: "Rohit V.", item: "Azithromycin 500mg", status: "Processing", statusColor: "#f4c542" },
];

const SIDEBAR_ITEMS = [
    { icon: "ri-dashboard-line", label: "Dashboard", active: true },
    { icon: "ri-file-list-3-line", label: "Orders", active: false },
    { icon: "ri-medicine-bottle-line", label: "Inventory", active: false },
    { icon: "ri-bar-chart-2-line", label: "Analytics", active: false },
    { icon: "ri-team-line", label: "Customers", active: false },
    { icon: "ri-settings-3-line", label: "Settings", active: false },
];

const QUICK_STATS = [
    { icon: "ri-whatsapp-line", label: "WhatsApp Orders", value: "142", color: "#25D366" },
    { icon: "ri-telegram-line", label: "Telegram Orders", value: "89", color: "#b7c25e" },
    { icon: "ri-phone-line", label: "Voice Orders", value: "53", color: "#7dcf50" },
];

export default function DashboardSection() {
    return (
        <section id="dashboard-section" style={{
            /* Full image at natural size, no crop, scrolls to see all like reference site */
            background: `linear-gradient(180deg, rgba(30,45,15,0.2) 0%, rgba(15,25,8,0.45) 100%), url(${backgroundImage}) center top no-repeat`,
            backgroundAttachment: "scroll",
            backgroundSize: "100% auto",
            minHeight: "100vh",
            /* Added padding bottom (10vh) so you can scroll past the full box */
            padding: "15vh 6vw 10vh",
            display: "flex",
            flexDirection: "column",
            /* INCREASED GAP HERE to add more space between header text and dashboard */
            gap: "150px",
        }}>

            {/* ── Header ── */}
            <div className="dash-anim">
                <p style={{ color: "#b7c25e", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", margin: "0 0 10px" }}>
                    Pharmacy Command Centre
                </p>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3.4rem)", color: "#f4ede6", margin: "0 0 10px", lineHeight: 1.05 }}>
                    Your patients order via chat —
                    <br />
                    <span style={{ fontFamily: "Georgia, serif", fontStyle: "italic", fontWeight: 400, color: "#c8dfa0" }}>you manage it all here.</span>
                </h2>
            </div>

            {/* ── Channel Quick Stats ── */}
            <div className="dash-anim" style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "-120px" }}>
                {QUICK_STATS.map(s => (
                    <div key={s.label} style={{
                        display: "flex", alignItems: "center", gap: "10px",
                        background: `${s.color}0D`,
                        border: `1px solid ${s.color}25`,
                        borderRadius: "12px", padding: "10px 18px",
                    }}>
                        <i className={s.icon} style={{ color: s.color, fontSize: "1.1rem" }} />
                        <div>
                            <div style={{ color: s.color, fontWeight: 800, fontSize: "1.05rem", fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>{s.value}</div>
                            <div style={{ color: "#f4ede6", opacity: 0.5, fontSize: "0.6rem", fontFamily: "'Outfit', sans-serif", marginTop: "2px", letterSpacing: "0.05em" }}>{s.label}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── Dashboard Shell ── */}
            <div className="dash-anim" style={{
                background: "rgba(12,20,5,0.95)",
                /* Restored the full border around the entire box */
                border: "1px solid rgba(183,194,94,0.15)",
                /* Restored full rounded corners (was 20px 20px 0 0) */
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 -20px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(183,194,94,0.06)",
                backdropFilter: "blur(14px)",
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                /* Removed minHeight so the box naturally wraps its content nicely */
            }}>

                {/* ── Sidebar ── */}
                <div style={{ borderRight: "1px solid rgba(183,194,94,0.08)", padding: "20px 0", background: "rgba(0,0,0,0.3)" }}>
                    <div style={{ padding: "0 18px 18px", borderBottom: "1px solid rgba(244,237,230,0.06)", marginBottom: "10px" }}>
                        <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: "0.82rem", color: "#f4ede6" }}>Sanjeevani</div>
                        <div style={{ color: "#b7c25e", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Outfit', sans-serif", marginTop: "2px" }}>Pharmacy Portal</div>
                    </div>
                    {SIDEBAR_ITEMS.map(item => (
                        <div key={item.label} style={{
                            display: "flex", alignItems: "center", gap: "10px",
                            padding: "9px 18px", margin: "2px 7px",
                            borderRadius: "10px",
                            background: item.active ? "rgba(183,194,94,0.13)" : "transparent",
                            cursor: "pointer",
                        }}>
                            <i className={item.icon} style={{ color: item.active ? "#b7c25e" : "rgba(244,237,230,0.35)", fontSize: "0.95rem" }} />
                            <span style={{ color: item.active ? "#f4ede6" : "rgba(244,237,230,0.4)", fontSize: "0.76rem", fontWeight: item.active ? 700 : 400, fontFamily: "'Outfit', sans-serif" }}>{item.label}</span>
                        </div>
                    ))}

                    {/* AI Status */}
                    <div style={{ margin: "14px 7px 0", padding: "10px 14px", background: "rgba(37,211,102,0.07)", border: "1px solid rgba(37,211,102,0.15)", borderRadius: "10px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#25D366", display: "inline-block", boxShadow: "0 0 6px #25D366" }} />
                            <span style={{ color: "#25D366", fontSize: "0.62rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", letterSpacing: "0.06em" }}>AI ACTIVE</span>
                        </div>
                        <div style={{ color: "#f4ede6", opacity: 0.45, fontSize: "0.58rem", fontFamily: "'Outfit', sans-serif" }}>Handling incoming orders</div>
                    </div>
                </div>

                {/* ── Main Content ── */}
                <div style={{ padding: "22px 26px", display: "flex", flexDirection: "column", gap: "20px" }}>

                    {/* Topbar */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <div style={{ color: "#f4ede6", fontWeight: 700, fontSize: "0.95rem", fontFamily: "'Outfit', sans-serif" }}>Good Morning, Dr. Mehta 👋</div>
                            <div style={{ color: "#f4ede6", opacity: 0.4, fontSize: "0.68rem", fontFamily: "'Outfit', sans-serif", marginTop: "1px" }}>Saturday, 22 Feb 2026</div>
                        </div>
                        <div style={{ display: "flex", gap: "8px" }}>
                            <button style={{ background: "rgba(183,194,94,0.1)", border: "1px solid rgba(183,194,94,0.25)", borderRadius: "9px", padding: "6px 13px", color: "#b7c25e", fontSize: "0.68rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", cursor: "pointer", letterSpacing: "0.05em" }}>+ Add Medicine</button>
                            <button style={{ background: "rgba(125,207,80,0.1)", border: "1px solid rgba(125,207,80,0.25)", borderRadius: "9px", padding: "6px 13px", color: "#7dcf50", fontSize: "0.68rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", cursor: "pointer", letterSpacing: "0.05em" }}>View All Orders</button>
                        </div>
                    </div>

                    {/* KPI row */}
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
                        {KPIS.map(k => (
                            <div key={k.label} style={{ background: "rgba(244,237,230,0.03)", border: "1px solid rgba(244,237,230,0.07)", borderRadius: "14px", padding: "14px 16px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "9px" }}>
                                    <i className={k.icon} style={{ color: k.color, fontSize: "1.1rem" }} />
                                    <span style={{ background: `${k.color}1A`, color: k.color, fontSize: "0.58rem", fontWeight: 700, padding: "2px 7px", borderRadius: "99px", fontFamily: "'Outfit', sans-serif" }}>{k.delta}</span>
                                </div>
                                <div style={{ color: "#f4ede6", fontWeight: 900, fontSize: "1.35rem", fontFamily: "'Outfit', sans-serif", lineHeight: 1 }}>{k.value}</div>
                                <div style={{ color: "#f4ede6", opacity: 0.38, fontSize: "0.6rem", fontFamily: "'Outfit', sans-serif", marginTop: "4px", letterSpacing: "0.07em", textTransform: "uppercase" }}>{k.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Chart + Orders */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "14px", flex: 1 }}>
                        {/* Bar Chart */}
                        <div style={{ background: "rgba(244,237,230,0.03)", border: "1px solid rgba(244,237,230,0.07)", borderRadius: "14px", padding: "16px" }}>
                            <div style={{ color: "#f4ede6", fontWeight: 700, fontSize: "0.75rem", fontFamily: "'Outfit', sans-serif", marginBottom: "4px", opacity: 0.85 }}>Inbound Orders (AI Channels)</div>
                            <div style={{ color: "#b7c25e", fontSize: "0.58rem", fontFamily: "'Outfit', sans-serif", marginBottom: "14px", opacity: 0.7 }}>WhatsApp · Telegram · Voice</div>
                            <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "100px" }}>
                                {CHART_BARS.map((h, i) => (
                                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", height: "100%" }}>
                                        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
                                            <div style={{ width: "100%", height: `${h}%`, background: i === 6 ? "#b7c25e" : "rgba(183,194,94,0.35)", borderRadius: "4px 4px 0 0", transition: "height 0.4s" }} />
                                        </div>
                                        <span style={{ color: "#f4ede6", opacity: 0.3, fontSize: "0.5rem", fontFamily: "'Outfit', sans-serif" }}>{CHART_DAYS[i]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Orders Table */}
                        <div style={{ background: "rgba(244,237,230,0.03)", border: "1px solid rgba(244,237,230,0.07)", borderRadius: "14px", padding: "16px", overflow: "auto" }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                                <div style={{ color: "#f4ede6", fontWeight: 700, fontSize: "0.75rem", fontFamily: "'Outfit', sans-serif", opacity: 0.85 }}>Recent Orders</div>
                                <span style={{ color: "#b7c25e", fontSize: "0.6rem", fontWeight: 600, fontFamily: "'Outfit', sans-serif", opacity: 0.7 }}>via WhatsApp / Telegram / Call</span>
                            </div>
                            {ORDERS.map(o => (
                                <div key={o.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "7px 0", borderBottom: "1px solid rgba(244,237,230,0.04)" }}>
                                    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                        <span style={{ color: "#b7c25e", fontSize: "0.6rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", minWidth: "54px" }}>{o.id}</span>
                                        <div>
                                            <div style={{ color: "#f4ede6", fontSize: "0.68rem", fontWeight: 600, fontFamily: "'Outfit', sans-serif" }}>{o.patient}</div>
                                            <div style={{ color: "#f4ede6", opacity: 0.4, fontSize: "0.58rem", fontFamily: "'Outfit', sans-serif" }}>{o.item}</div>
                                        </div>
                                    </div>
                                    <span style={{ background: `${o.statusColor}15`, color: o.statusColor, fontSize: "0.56rem", fontWeight: 700, padding: "3px 9px", borderRadius: "99px", fontFamily: "'Outfit', sans-serif", border: `1px solid ${o.statusColor}28`, whiteSpace: "nowrap" }}>{o.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Inventory Alert Banner */}
                    <div style={{
                        display: "flex", alignItems: "center", gap: "12px",
                        background: "rgba(255,107,107,0.07)", border: "1px solid rgba(255,107,107,0.18)",
                        borderRadius: "12px", padding: "10px 16px",
                    }}>
                        <i className="ri-error-warning-line" style={{ color: "#ff6b6b", fontSize: "1rem", flexShrink: 0 }} />
                        <div style={{ flex: 1 }}>
                            <span style={{ color: "#ff6b6b", fontWeight: 700, fontSize: "0.7rem", fontFamily: "'Outfit', sans-serif" }}>Low Stock Alert — </span>
                            <span style={{ color: "#f4ede6", opacity: 0.6, fontSize: "0.68rem", fontFamily: "'Outfit', sans-serif" }}>7 medicines below reorder level. Metformin 500mg &amp; 3 others need restocking.</span>
                        </div>
                        <button style={{ background: "rgba(255,107,107,0.12)", border: "1px solid rgba(255,107,107,0.25)", borderRadius: "8px", padding: "5px 12px", color: "#ff6b6b", fontSize: "0.62rem", fontWeight: 700, fontFamily: "'Outfit', sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}>View Inventory</button>
                    </div>
                </div>
            </div>
        </section>
    );
}