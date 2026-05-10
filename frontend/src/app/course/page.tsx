"use client";

import { NavLink } from "react-router-dom";

const courses = [
  {
    id: 0,
    title: "Earthquake Preparedness",
    category: "Earthquake",
    level: "Beginner",
    duration: "2 Hours",
    desc: "Learn safety measures, evacuation plans, and survival techniques during earthquakes.",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    icon: "🏠",
  },
  {
    id: 1,
    title: "Flood Safety & Response",
    category: "Flood",
    level: "Beginner",
    duration: "1.5 Hours",
    desc: "Understand flood risks, evacuation strategies, and emergency response actions.",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    icon: "🌊",
  },
  {
    id: 2,
    title: "Fire Emergency Handling",
    category: "Fire",
    level: "Intermediate",
    duration: "2.5 Hours",
    desc: "Learn fire prevention, extinguisher usage, and evacuation procedures.",
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    icon: "🔥",
  },
  {
    id: 3,
    title: "Cyclone Preparedness",
    category: "Cyclone",
    level: "Intermediate",
    duration: "2 Hours",
    desc: "Prepare for cyclones with safety planning and emergency readiness strategies.",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    icon: "🌪️",
  },
  {
    id: 4,
    title: "Disaster First Aid",
    category: "General",
    level: "Beginner",
    duration: "1 Hour",
    desc: "Basic first aid techniques during emergencies and disasters.",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    icon: "🩹",
  },
  {
    id: 5,
    title: "Search & Rescue Basics",
    category: "Advanced",
    level: "Advanced",
    duration: "3 Hours",
    desc: "Learn how rescue operations work and how to assist safely.",
    color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    icon: "🚁",
  },
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 px-6 py-12 relative overflow-hidden font-sans">
      
      {/* ANIMATED BACKGROUND MESH */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* BACK BUTTON */}
        <div className="mb-8">
          <NavLink 
            to="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 font-bold text-xs uppercase tracking-widest hover:bg-white/10 hover:text-white hover:border-cyan-500/50 transition-all group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> 
            Return to Command Center
          </NavLink>
        </div>

        {/* HEADER */}
        <div className="text-center mb-20 space-y-4">
          <span className="text-cyan-500 font-black tracking-[0.3em] uppercase text-xs">Learning Portal</span>
          <h1 className="text-5xl md:text-6xl font-black text-white tracking-tighter">
            Disaster Education Modules
          </h1>
          <p className="mt-6 text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed">
            Equip yourself with the knowledge to stay safe. Comprehensive guides for emergency preparedness and response.
          </p>
        </div>

        {/* COURSES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/5 p-10 shadow-2xl hover:bg-white/10 hover:border-white/10 hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className={`px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest ${course.color}`}>
                  {course.category}
                </div>
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-2xl shadow-inner border border-white/5 group-hover:scale-110 transition-transform">
                  {course.icon}
                </div>
              </div>

              <h2 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">
                {course.title}
              </h2>

              <p className="text-slate-400 leading-relaxed mb-8 font-medium">
                {course.desc}
              </p>

              <div className="mt-auto relative z-10">
                <div className="flex items-center gap-6 text-[10px] font-black text-slate-500 mb-8 border-t border-white/5 pt-8 uppercase tracking-[0.1em]">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500 text-sm">📊</span> {course.level}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-500 text-sm">⏱</span> {course.duration}
                  </div>
                </div>

                <NavLink
                  to={`/course/${course.id}`}
                  className="block w-full bg-white text-black  text-center py-4 rounded-2xl hover:bg-cyan-400 hover:text-white hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] active:scale-95 transition-all duration-300 uppercase text-xs tracking-widest"
                >
                  Start Protocol
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-32 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 p-12 md:p-20 text-center text-white shadow-[0_20px_50px_rgba(37,99,235,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-900/40 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 space-y-8">
                <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-none">Stay Prepared, Stay Safe 🚨</h3>
                <p className="text-blue-100 text-xl font-medium opacity-90 max-w-xl mx-auto leading-relaxed">
                    Join over 10,000 students learning to build more resilient communities. Your journey to mastery starts here.
                </p>
                <button className="bg-white text-blue-600 px-12 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 hover:shadow-2xl transition-all active:scale-95">
                    Browse All Resources
                </button>
            </div>
        </div>
      </div>

      <div className="h-20"></div>
    </div>
  );
}