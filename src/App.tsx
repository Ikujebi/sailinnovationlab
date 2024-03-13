import { lazy,Suspense } from 'react';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import Home from "./components/Home";
const  Guests =  lazy(() => import ('./components/Guests')) ;
import AboutNav from './components/AboutNav';
import OurProgramsNav from './components/OurProgramsNav';
import BlogNav from './components/BlogNav';
import IndividualBlog1 from './components/IndividualBlog';
import IndividualBlog2 from './components/individualBlog2';
import ParticipantsSelection from './Facility/Pages/Participants/ParticipantsSelection';
import Signin from './Facility/Pages/Signin/Sigin';
import SignUp from "./Facility/Pages/SignUp/SignUp";
import Dashboard from "./Facility/Pages/DashboardNew/Dashboard";
import Details from "./Facility/Pages/DashboardNew/components/Details";
import Profile from "./Facility/Pages/Profile/Profile";
import ClockInHistory from "./Facility/Pages/DashboardNew/components/ClockInHistory/ClockInHistory";
import Participants from "./Facility/Pages/Participants/Participants";
import UserDashboard from "./Facility/Pages/DashboardNew/UserDashboard/UserDashboard";
import UserDetails from "./Facility/Pages/DashboardNew/UserDashboard/components/UserDetails";
import UserProfile from "./Facility/Pages/DashboardNew/UserDashboard/components/Profile/Profile";
import ForgotPassword from "./Facility/Pages/ForgotPassword/ForgotPass"

function App () {
  
  const router = createBrowserRouter([
    {
      element: <Home />,
      path: '/'
    },
    {
      element: <Guests />,
      path: '/guest'
    },
    {
      element: <AboutNav />,
      path: '/aboutNav'
    },
    {
      element: <OurProgramsNav />,
      path: '/programNav'
    },
    {
      element: <BlogNav />,
      path: '/blognav'
    },
    {
      element: <IndividualBlog1 />,
      path: '/individualBlog'
    },
    {
      element: <IndividualBlog2 />,
      path: '/individualBlog2'
    },
   
    {
      element: <Signin />,
      path: '/signin'
    },
    {
      element: <SignUp />,
      path: '/signup'
    },
    {
      element: <ForgotPassword />,
      path: '/forgotPassword'
    },
  
    {
      element: <Dashboard />,
      path: '/dashboard/details',
      errorElement: (
        <div className="h-[100svh] grid items-center justify-center">
          <h1>Page Not Found</h1>
          <button className="">
            <Link to={"/dashboard/details"}>Go to Dashboard</Link>
          </button>
        </div>
      ),
      children: [
        {
          element: <Details />,
          path: '/dashboard/details/'
        },
        {
          element: <Profile />,
          path: '/dashboard/details/profile'
        },
        {
          element: <ClockInHistory />,
          path: '/dashboard/details/clockins'
        },
        {
          element: <Participants />,
          path: '/dashboard/details/participants'
        },
        {
          element: <ParticipantsSelection />,
          path: '/dashboard/details/participantsSelection'
        },
      ]
    },
    {
      path: "/user/dashboard/",
      errorElement: (
        <div className="h-[100svh] grid items-center justify-center">
          <h1>Page Not Found</h1>
          <button className="">
            <Link to={"/user/dashboard/details"}>Go to Dashboard</Link>
          </button>
        </div>
      ),
      element: <UserDashboard />,
      
      children: [
        {
          element: <UserDetails />,
          path: '/user/dashboard/'
        },
        {
          element: <UserProfile />,
          path: '/user/dashboard/profile'
        }
      ]
    } 
  ]);
  
  return(
    <Suspense fallback={<div>Loading...</div>}>
<RouterProvider router={router} />
</Suspense>
  ) 
}

export default App;
