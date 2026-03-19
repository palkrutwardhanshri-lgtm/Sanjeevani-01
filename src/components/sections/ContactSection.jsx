/**
 * ContactSection
 * The final scroll section after the curtain animation.
 * Normal scroll behaviour — no GSAP pinning.
 * GSAP targets `.contact-anim` for entrance animation.
 */
export default function ContactSection() {
    return (
        <div className="contact-section w-full min-h-screen bg-slate-900 text-white flex items-center justify-center relative">
            {/* Subtle glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/30 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 container mx-auto flex flex-col items-center text-center max-w-4xl px-6">
                <p className="contact-anim text-xs font-bold tracking-[0.4em] text-cyan-400 uppercase mb-6">Connect With Us</p>

                <h2 className="contact-anim text-4xl md:text-6xl font-[900] text-white leading-tight mb-8 font-['Outfit']">
                    Ready to Transform <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Your Pharmacy?</span>
                </h2>

                <div className="contact-anim grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-10">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition duration-300">
                        <i className="ri-mail-send-line text-4xl text-blue-400 mb-4 block" />
                        <h3 className="text-xl font-bold mb-2">Email Us</h3>
                        <p className="text-slate-400">hello@sanjeevanirxai.com</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition duration-300">
                        <i className="ri-phone-line text-4xl text-cyan-400 mb-4 block" />
                        <h3 className="text-xl font-bold mb-2">Call Us</h3>
                        <p className="text-slate-400">+1 (555) 123-4567</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition duration-300">
                        <i className="ri-map-pin-line text-4xl text-indigo-400 mb-4 block" />
                        <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                        <p className="text-slate-400">Tech Hub, Silicon Valley</p>
                    </div>
                </div>

                <div className="contact-anim mt-16">
                    <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg shadow-lg hover:shadow-cyan-500/20 hover:-translate-y-1 transition duration-300">
                        Schedule a Demo
                    </button>
                </div>
            </div>
        </div>
    );
}
