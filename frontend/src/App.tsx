import './App.css'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Home from './components/HomePage';
import About from './app/about/page';
import Courses from './app/course/page';
// import SignUp from './app/signup/page'
// import Login from './app/login/page'
import PageNotFound from './components/PageNotFound';
// import Performance  from './app/performance/page';
import CourseDetails from './app/course/CourseDetails';
// import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function App() {


  // const GoogleAuthWrapper=()=>{
  //   return(
  //     <GoogleOAuthProvider clientId='894782704741-k8erh8o4hg48oj97j8v9lvtdhfr9o8qt.apps.googleusercontent.com'>
  //       <SignUp></SignUp>
  //     </GoogleOAuthProvider>
  //   )
  // }

  // const GoogleAuthWrapperContainer=()=>{
  //   return(
  //     <GoogleOAuthProvider clientId='894782704741-k8erh8o4hg48oj97j8v9lvtdhfr9o8qt.apps.googleusercontent.com'>
  //       <Login></Login>
  //     </GoogleOAuthProvider>
  //   )
  // }

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Courses />} />
        {/* <Route path='/signup' element={<GoogleAuthWrapper/>}/> */}
        {/* <Route path='/login' element={<GoogleAuthWrapperContainer/>}/> */}
        <Route path='/course/:courseID' element={<CourseDetails/>}/>
        {/* <Route path='/performance' element={<Performance/>}/> */}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
