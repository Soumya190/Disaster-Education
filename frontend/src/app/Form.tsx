import { useReducer } from "react";
// Import icons from lucide-react
import { Zap, Mail, Lock, KeyRound } from "lucide-react";

const Form = () => {
  // const reducer((state,action)=>{

  // })

  const data = [
    { firstName: "Soumya" },
    { lastName: "Tiwari" },
    { phoneNumber: 9138925489 },
  ];

  // const [state, dispatch] = useReducer(reducer, data);

  return (
    // 1. IMPROVEMENT: Black background with animated gradient overlay and fade-in
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0c] px-4 relative overflow-hidden font-sans antialiased animate-fadeIn">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(79,70,229,0.15),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.15),transparent_50%)]"></div>

      {/* 2. IMPROVEMENT: Glassmorphism Card (Dark, Blurry, subtle border) */}
      <div className="relative bg-white/[0.02] backdrop-blur-xl p-10 rounded-3xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] w-full max-w-md transition-all duration-300 hover:border-white/[0.1] hover:shadow-indigo-500/10 hover:shadow-2xl slide-up-animation">
        
        {/* 3. IMPROVEMENT: Added animated Icon and re-styled Header */}
        <div className="mb-10 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 mb-5 animate-pulse">
            <Zap className="w-8 h-8 text-white" strokeWidth={1.5}/>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">Welcome Back</h2>
          <p className="text-gray-400 text-base mt-2 max-w-xs">Securely sign in to your digital command center</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          {/* Email Field */}
          <div className="relative group">
            <label className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-indigo-400">
              Email Address
            </label>
            <div className="relative">
              {/* Input Icon */}
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transition-colors group-focus-within:text-indigo-400" />
              <input 
                type="email" 
                className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.08] text-white rounded-xl placeholder:text-gray-600 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 focus:bg-white/[0.05] outline-none transition-all duration-200"
                placeholder="name@company.com"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="relative group">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-300 transition-colors group-focus-within:text-indigo-400">
                Password
              </label>
              <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors flex items-center gap-1">
                {/* <KeyRound size={14} /> */}
                Forgot?
              </a>
            </div>
            <div className="relative">
              {/* Input Icon */}
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 transition-colors group-focus-within:text-indigo-400" />
              <input 
                type="password" 
                className="w-full pl-12 pr-4 py-3.5 bg-white/[0.03] border border-white/[0.08] text-white rounded-xl placeholder:text-gray-600 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 focus:bg-white/[0.05] outline-none transition-all duration-200"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember" 
                className="h-4 w-4 bg-white/[0.05] border-white/[0.1] rounded text-indigo-600 focus:ring-offset-0 focus:ring-1 focus:ring-indigo-500 focus:ring-offset-[#0a0a0c]"
              />
              <label htmlFor="remember" className="ml-2.5 block text-sm text-gray-400">
                Keep me signed in
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3.5 px-4 rounded-xl font-bold text-base hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform active:scale-[0.98] shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40"
          >
            Authorize Access
          </button>
        </form>

        {/* Signup Redirect */}
        <div className="mt-10 pt-6 border-t border-white/[0.05] text-center text-sm text-gray-500">
          New to the platform? 
          <a href="/signup" className="ml-1.5 text-indigo-400 font-semibold hover:text-indigo-300 transition-colors hover:underline">
            Create an account
          </a>
        </div>
      </div>

      {/* Basic Keyframe Animations for the page */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .slide-up-animation {
          animation: slideUp 0.7s ease-out 0.1s both;
        }
      `}</style>
    </div>
  );
};

export default Form;