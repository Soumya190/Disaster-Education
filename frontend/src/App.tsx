import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/HomePage';
import About from './app/about/page';
import Courses from './app/course/page';
import SignUp from './app/signup/page'
import Login from './app/login/page'
import PageNotFound from './components/PageNotFound';
import Performance  from './app/perfomance/page';
import CourseDetails from './app/course/CourseDetails';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

import { useState } from 'react';

function App() {

  const [categoryVal,setCategoryVal] = useState('');

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


  const GoogleAuthWrapper=()=>{
    return(
      <GoogleOAuthProvider clientId='894782704741-k8erh8o4hg48oj97j8v9lvtdhfr9o8qt.apps.googleusercontent.com'>
        <SignUp></SignUp>
      </GoogleOAuthProvider>
    )
  }

  const GoogleAuthWrapperContainer=()=>{
    return(
      <GoogleOAuthProvider clientId='894782704741-k8erh8o4hg48oj97j8v9lvtdhfr9o8qt.apps.googleusercontent.com'>
        <Login></Login>
      </GoogleOAuthProvider>
    )
  }

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses courses={courses}  categoryVal={categoryVal} setCategoryVal={setCategoryVal}/>} />
        <Route path='/signup' element={<GoogleAuthWrapper/>}/>
        <Route path='/login' element={<GoogleAuthWrapperContainer/>}/>
        <Route path='/course/:courseID' element={<CourseDetails courses={courses} categoryVal={categoryVal} setCategoryVal={setCategoryVal}/>}/>
        <Route path='/performance' element={<Performance/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
