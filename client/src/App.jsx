import React from 'react'
import ProtectedRoute from './routecomponent/ProtectedRoute';
//landing page
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//dashboard
import { Navigate, Route, Routes } from "react-router-dom";
import AdminDashboard from "./user/admin/pages/AdminDashboard";
import Studentinfo from "./user/admin/pages/Studentinfo";
import Complains from "./user/admin/pages/Complains";
import Coursemanage from "./user/admin/pages/Coursemanage";
import Teacherinfo from "./user/admin/pages/Teacherinfo";
import Swappool from "./user/admin/pages/Swappool";
import Announcements from "./user/admin/pages/Announcements";
import Feedback from "./user/admin/pages/Feedback";
import Revenue from "./user/admin/pages/Revenue";
///for teacherdashboard
import TeacherDashboard from "./user/teacher/pages/TeacherDashboard";
import EnrollStudent from "./user/teacher/pages/EnrollStudent";
import AddComplain from "./user/teacher/pages/AddComplain";
import AddCourse from "./user/teacher/pages/AddCourse";
import ViewProfile from "./user/teacher/pages/ViewProfile";
import CreateProfile from "./user/teacher/pages/CreateProfile";
import ImportantAnnouncement from "./user/teacher/pages/ImportantAnnouncement";
import GiveFeedback from "./user/teacher/pages/GiveFeedback";
import Earnings from "./user/teacher/pages/Earnings";


import Register from './auth/Register/Register';
import Login from './auth/Login/Login';
import { useAuth } from './contexts/AuthContext';
import Upteacher from './user/admin/pages/Upteacher';
import Edit  from './user/teacher/pages/Edit';




const App = () => {
  const { isAuthenticated } = useAuth();
  const { isAuthenticatedT } = useAuth();
  const { isAuthenticatedS } = useAuth();
  const { isAuthenticatedE } = useAuth();

  return (
    <main className="overflow-x-hidden">

      <Routes>
        {/* //landing page routes */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

        {/* //login and signup routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/signIn" element={<Login />} />

        {/* //admindashboard routes */}    
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} role={"admin"} />}>
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/admindashboard/Studentinfo" element={<Studentinfo />} />
        <Route path="/admindashboard/Teacherinfo" element={<Teacherinfo />} />
        <Route path="/admindashboard/Cousrsemanagement" element={<Coursemanage />} />
        <Route path="/admindashboard/Swappool" element={<Swappool/>} />
        <Route path="/admindashboard/Complains" element={<Complains/>} />
        <Route path="/admindashboard/Addannouncements" element={<Announcements />} />
        <Route path="/admindashboard/Revenue" element={<Revenue />} />
        <Route path="/admindashboard/Feedback" element={<Feedback />} />
        <Route path="/admindashboard/updateteacher/:id" element={<Upteacher />} />

        
        </Route>

        {/* //teacherdashboard routes */}    
        <Route element={<ProtectedRoute isAuthenticatedT={isAuthenticatedT} role={"teacher"} />}>
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        <Route path="/teacherdashboard/CreateProfile" element={<CreateProfile />} />
        <Route path="/teacherdashboard/AddCourse" element={<AddCourse />} />
        <Route path="/teacherdashboard/ImportantAnnouncement" element={<ImportantAnnouncement />} />
        <Route path="/teacherdashboard/AddComplain" element={<AddComplain />} />
        <Route path="/teacherdashboard/ViewProfile/" element={<ViewProfile />} />
        <Route path="/teacherdashboard/EnrollStudent" element={<EnrollStudent />} />
        <Route path="/teacherdashboard/GiveFeedback" element={<GiveFeedback />} />
        <Route path="/teacherdashboard/Earnings" element={<Earnings />} />
        {/* <Route path="/teacherdashboard/ViewProfile/" component={ViewProfile} /> */}
        <Route path="/teacherdashboard/Edit/:_id" element={<Edit/>} />

        /teacherdashboard/Edit/
    
        </Route>

        {/* //studentdashboard routes */} 
        <Route element={<ProtectedRoute isAuthenticatedS={isAuthenticatedS} role={"student"} />}>
        <Route path="/studentdashboard" element={<AdminDashboard />} />
        </Route>

        {/* //swaperdashboard routes */} 
        <Route element={<ProtectedRoute isAuthenticatedE={isAuthenticatedE} role={"swaper"} />}>
        <Route path="/swaperdashboard" element={<AdminDashboard />} />
        </Route>

        </Routes>

    </main>
  )
}

export default App

