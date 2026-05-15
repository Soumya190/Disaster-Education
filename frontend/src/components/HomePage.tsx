"use client";

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {

    const [disasters, setDisasters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch('https://www.gdacs.org/gdacsapi/api/Events/geteventlist/homepagetable');
                const res = await data.json();

                // GDACS standard response usually wraps the array inside an 'events' or 'features' key, 
                // or returns it directly. We fall back safely.
                const incidentList = res.events || res || [];
                setDisasters(incidentList);
            } catch (error) {
                console.error("Failed to fetch global incidents:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const getDisasterStyles = (eventType: any) => {
        const types = {
            EQ: { label: "Earthquake", emoji: "🌋", color: "from-red-500/20 to-orange-500/20 text-orange-400 border-orange-500/30" },
            TC: { label: "Cyclone", emoji: "🌀", color: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/30" },
            FL: { label: "Flood", emoji: "🌊", color: "from-blue-600/20 to-indigo-500/20 text-blue-400 border-blue-500/30" },
            VO: { label: "Volcano", emoji: "🌋", color: "from-red-600/20 to-amber-500/20 text-red-400 border-red-500/30" },
            WF: { label: "Wildfire", emoji: "🔥", color: "from-orange-600/20 to-yellow-500/20 text-orange-500 border-orange-500/30" },
            DR: { label: "Drought", emoji: "☀️", color: "from-amber-600/20 to-yellow-700/20 text-amber-500 border-amber-500/30" }
        };
        return types[eventType] || { label: eventType || "Incident", emoji: "🚨", color: "from-slate-500/20 to-slate-600/20 text-slate-400 border-white/10" };
    };

    return (
        <div className="bg-[#020617] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200 min-h-screen font-sans overflow-x-hidden">

            {/* ANIMATED BACKGROUND MESH */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] delay-700"></div>
            </div>

            {/* NAVBAR */}
            <nav className="fixed top-0 w-full bg-[#020617]/80 backdrop-blur-xl border-b border-white/5 z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:rotate-12 transition-transform">D</div>
                        <h1 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                            DisasterEducation
                        </h1>
                    </div>

                    <div className="hidden md:flex gap-10 text-sm font-semibold text-slate-400">
                        <NavLink to="/" className="hover:text-cyan-400 transition-colors">Home</NavLink>
                        <NavLink to="/about" className="hover:text-cyan-400 transition-colors">About</NavLink>
                        <NavLink to="#features" className="hover:text-cyan-400 transition-colors">Features</NavLink>
                        <NavLink to="/course" className="hover:text-cyan-400 transition-colors">Courses</NavLink>
                        <NavLink to="/performance" className="hover:text-cyan-400 transition-colors">Performance</NavLink>
                    </div>

                    <div className="flex items-center gap-3">
                        <NavLink
                            to="/login"
                            className="hidden sm:block text-sm font-bold text-slate-300 hover:text-white px-4 py-2.5 transition-colors"
                        >
                            Login
                        </NavLink>

                        <NavLink
                            to="/signup"
                            className="relative group overflow-hidden bg-white text-slate-950 px-6 py-2.5 rounded-full text-sm font-black transition-all hover:scale-105 active:scale-95"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <span className="relative z-10 group-hover:text-white transition-colors">Get Started</span>
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
                    {/* LEFT CONTENT */}
                    <div className="text-left space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider animate-fade-in">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                            </span>
                            Now updated for 2026
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
                            Prepare Today. <br />
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                                Survive Tomorrow.
                            </span>
                        </h1>

                        <p className="text-slate-400 text-xl leading-relaxed max-w-lg">
                            Interactive disaster education, real-time alerts, and virtual drills
                            designed to protect what matters most.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <NavLink
                                to="/login"
                                className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 hover:-translate-y-1 transition-all active:scale-95"
                            >
                                Start Training Free
                            </NavLink>
                            <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 backdrop-blur-md transition-all">
                                View Curriculum
                            </button>
                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative flex justify-center items-center group">
                        <div className="absolute inset-0 bg-blue-600/20 rounded-[2rem] blur-[60px] group-hover:bg-blue-600/30 transition-colors"></div>
                        <div className="relative z-10 w-full max-w-[450px] aspect-square bg-slate-900/50 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-white/10 flex flex-col items-center justify-center p-12 overflow-hidden transition-transform group-hover:scale-[1.02]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent"></div>
                            <div className="text-7xl mb-6 animate-bounce">🌍</div>
                            <h2 className="text-2xl font-bold text-white tracking-tight">Safety First</h2>
                            <div className="mt-6 flex gap-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-14 h-1.5 bg-white/5 rounded-full overflow-hidden">
                                        <div className="w-1/2 h-full bg-gradient-to-r from-cyan-500 to-blue-600 animate-[shimmer_2s_infinite]"></div>
                                    </div>
                                ))}
                            </div>
                            <p className="mt-8 text-center text-slate-400 text-sm italic leading-relaxed">
                                "The best time to prepare was yesterday. The second best time is now."
                            </p>
                        </div>
                        {/* Decorative rotating border effect */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500 rounded-[2.5rem] -z-10 opacity-20 rotate-3 group-hover:rotate-6 transition-transform"></div>
                    </div>
                </div>
            </section>

            <div className="w-full max-w-7xl mx-auto z-10 mt-12 mb-6">
                <div className="flex items-center gap-3 mb-6 px-4 relative">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping absolute"></span>
                    <span className="w-2 h-2 rounded-full bg-red-500 relative"></span>
                    <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-slate-400 pl-4">Live Global Incidents Feed</h3>
                </div>

                {loading ? (
                    <div className="h-48 flex items-center justify-center text-slate-500 text-sm font-semibold">
                        Connecting to Global Radar Systems...
                    </div>
                ) : disasters.length === 0 ? (
                    <div className="h-48 flex items-center justify-center text-slate-500 text-sm font-semibold">
                        No active incidents monitored at this moment.
                    </div>
                ) : (
                    <div className="relative w-full overflow-hidden py-4">
                        <div className="flex gap-6 w-max animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
                            {[...disasters, ...disasters].map((incident, index) => {
                                const style = getDisasterStyles(incident.eventtype);
                                return (
                                    <div
                                        key={`${incident.eventid || index}-${index}`}
                                        className="w-[350px] flex-shrink-0 bg-slate-900/40 backdrop-blur-md border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-white/10 hover:bg-slate-900/60 transition-all group"
                                    >
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-start">
                                                <span className={`px-3 py-1 text-xs font-black uppercase rounded-lg bg-gradient-to-r border ${style.color}`}>
                                                    {style.emoji} {style.label}
                                                </span>
                                                <span className="text-[11px] font-bold text-slate-500 tracking-wider">
                                                    Alert: {incident.alertlevel || 'Unknown'}
                                                </span>
                                            </div>
                                            <h4 className="text-white font-bold text-base tracking-tight line-clamp-1 group-hover:text-cyan-400 transition-colors">
                                                {incident.eventname}
                                            </h4>
                                            <p className="text-slate-400 text-xs leading-relaxed line-clamp-2">
                                                {incident.description || 'No immediate textual damage analysis reported.'}
                                            </p>
                                        </div>
                                        <div className="border-t border-white/5 mt-4 pt-3 flex justify-between items-center text-[11px] text-slate-500 font-medium">
                                            <span>📍 {incident.country || 'Global Waters'}</span>
                                            <span>⏱️ {incident.fromdate ? incident.fromdate.split('T')[0] : 'Recent'}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>

            {/* FEATURES */}
            <section id="features" className="py-32 px-6 bg-[#020617] relative">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-sm">Capabilities</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Engineered for Readiness</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Education Modules", desc: "Structured courses covering Earthquakes, Floods, and Fire safety.", icon: "📚", color: "from-blue-500 to-cyan-500" },
                            { title: "Virtual Drills", desc: "Interactive emergency scenarios in a controlled environment.", icon: "🚨", color: "from-red-500 to-orange-500" },
                            { title: "Real-Time Alerts", desc: "Smart notifications during drills and actual emergencies.", icon: "📢", color: "from-amber-400 to-yellow-600" },
                            { title: "Analytics Dashboard", desc: "Data-driven insights into your regional risk and progress.", icon: "📊", color: "from-emerald-400 to-teal-600" },
                        ].map((f, i) => (
                            <div
                                key={i}
                                className="group p-8 bg-white/5 border border-white/5 rounded-[2rem] hover:bg-white/10 hover:border-white/10 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${f.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`}></div>
                                <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner group-hover:scale-110 transition-transform border border-white/5">
                                    {f.icon}
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-white tracking-tight">{f.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 px-6">
                <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-[0_20px_50px_rgba(37,99,235,0.3)]">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-[80px]"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400/20 rounded-full translate-x-1/2 translate-y-1/2 blur-[60px]"></div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-none">
                            Start Your Safety Journey Today
                        </h2>
                        <p className="text-blue-100 text-lg font-medium opacity-90">
                            Join over 15,000 users building a more resilient future. Your preparation starts with a single click.
                        </p>
                        <NavLink
                            to="/login"
                            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-black text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 transition-all active:scale-95"
                        >
                            Get Started for Free
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-black/40 backdrop-blur-md text-slate-500 py-20 px-6 border-t border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
                    <div className="col-span-2">
                        <div className="flex items-center gap-2 mb-6 text-white">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">D</div>
                            <span className="text-xl font-bold tracking-tighter">DisasterReady</span>
                        </div>
                        <p className="max-w-sm mb-8 leading-relaxed font-medium">
                            A comprehensive platform dedicated to reducing disaster risk through innovative technology and community education.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-semibold">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Courses</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Emergency Alerts</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Partner Program</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Connect</h4>
                        <ul className="space-y-4 text-sm font-semibold">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-white/5 text-center text-[10px] tracking-[0.3em] font-bold uppercase opacity-50">
                    © {new Date().getFullYear()} DisasterReady. Built for Resilience.
                </div>
            </footer>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes shimmer {
                  0% { transform: translateX(-100%); }
                  100% { transform: translateX(100%); }
                }
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-10%); }
                }
                `
            }} />
        </div>
    );
}