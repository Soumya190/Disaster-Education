import { NavLink } from "react-router-dom";

const PageNotFound = () => {
    return (
        <>
            <div className="min-h-screen bg-[#020617] text-slate-100 px-6 py-12 relative overflow-hidden font-sans">
                <div className="mb-8">
                    <NavLink
                        to="/"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:text-white hover:border-cyan-500/50 transition-all group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        Return to Command Center
                    </NavLink>
                </div>
                <div className="grid place-content-center items-center">
                    <h1>404 Page Not Found</h1>
                </div>
            </div>
        </>
    )
}

export default PageNotFound;