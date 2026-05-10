"use client";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-blue-100 relative overflow-hidden">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-[120px] -z-10"></div>

      {/* HEADER SECTION */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 rounded-full">
          Our Vision
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 leading-[1.1]">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">DisasterReady</span>
        </h1>
        <p className="mt-8 text-slate-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          We are bridge between chaos and coordination. DisasterReady is a modern ecosystem built to 
          transform passive awareness into active, life-saving readiness.
        </p>
      </div>

      {/* MAIN CONTENT CARD (Glassmorphism) */}
      <div className="max-w-5xl mx-auto px-6 mb-24">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white border border-slate-200 p-8 md:p-14 rounded-3xl shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-3">
                <h2 className="text-3xl font-extrabold mb-6 text-slate-800">
                  What is DisasterReady?
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  Born out of the need for rapid response training, DisasterReady is an advanced 
                  digital framework. We don't just provide information—we provide <span className="font-bold text-slate-900 underline decoration-blue-500/30">experience</span>. 
                  Our system utilizes data-driven insights to simulate high-stress scenarios, 
                  allowing users to build muscle memory before a crisis strikes.
                </p>
              </div>
              <div className="md:col-span-2 bg-slate-50 rounded-2xl p-8 flex flex-col items-center justify-center border border-slate-100">
                  <div className="text-6xl mb-4">🛡️</div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">100%</div>
                    <div className="text-sm text-slate-500 uppercase tracking-tighter">Readiness Goal</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES BENTO GRID */}
      <div className="max-w-6xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">The Core Pillars</h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Large Feature */}
          <div className="md:col-span-2 group bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-7xl opacity-10 group-hover:opacity-20 transition-opacity">📚</div>
             <h3 className="text-2xl font-bold mb-4">Interactive Education</h3>
             <p className="text-slate-500 max-w-md leading-relaxed">
               Expert-led modules that go beyond text. Engaging videos, interactive 
               quizzes, and scenario-based assessments designed for long-term retention.
             </p>
             <div className="mt-8 flex gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-md">VETTING</span>
                <span className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-md">CERTIFIED</span>
             </div>
          </div>

          {/* Square Feature */}
          <div className="bg-slate-900 text-white p-10 rounded-[2.5rem] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500">
             <div className="text-4xl">🚨</div>
             <div>
               <h3 className="text-2xl font-bold mb-2">Virtual Drills</h3>
               <p className="text-slate-400 text-sm">Real-time pressure, zero real-world risk.</p>
             </div>
          </div>

          {/* Square Feature */}
          <div className="bg-blue-600 text-white p-10 rounded-[2.5rem] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-500 shadow-lg shadow-blue-200">
             <div className="text-4xl">📢</div>
             <div>
               <h3 className="text-2xl font-bold mb-2">Instant Alerts</h3>
               <p className="text-blue-100 text-sm">Critical communication when seconds count.</p>
             </div>
          </div>

          {/* Medium Feature */}
          <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm flex items-center justify-between group">
             <div className="max-w-xs">
                <h3 className="text-2xl font-bold mb-2 text-slate-800">Analytics Dashboard</h3>
                <p className="text-slate-500 text-sm">Visualizing preparedness through heatmaps and performance metrics.</p>
             </div>
             <div className="text-5xl group-hover:rotate-12 transition-transform">📊</div>
          </div>
        </div>
      </div>

      {/* MISSION SECTION (Gradient Card) */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          {/* Decorative Ring */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 border-[20px] border-white/5 rounded-full"></div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-slate-300 text-xl leading-relaxed max-w-3xl mx-auto">
              "To democratize disaster preparedness through technology, ensuring 
              that geographical or economic barriers never prevent a person from 
              knowing how to save a life."
            </p>
            <button className="mt-12 bg-white text-slate-900 px-10 py-4 rounded-2xl font-bold hover:bg-blue-50 transition shadow-lg">
              Partner With Us
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}