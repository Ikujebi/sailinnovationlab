import { lazy,Suspense } from 'react';
import { RouterProvider, createBrowserRouter, Link } from 'react-router-dom';
import Home from "./PAGES/Home";
import AboutNav from './PAGES/AboutNav';
import OurProgramsNav from './components/OurProgramsNav';
import BlogNav from './PAGES/BlogNav';
import UserDashboard1 from './Facility/Pages/DashboardNew/UserDashboard/UserDashboard';
const  Guests =  lazy(() => import ('./PAGES/Guests')) ;
const  ParticipantsSelection =  lazy(() => import ('./Facility/Pages/Participants/ParticipantsSelection')) ;
const  SignUp =  lazy(() => import ("./Facility/Pages/SignUp/SignUp")) ;
const  Signin =  lazy(() => import ('./Facility/Pages/Signin/Sigin')) ;
const  IndividualBlog1 =  lazy(() => import ('./PAGES/IndividualBlog')) ;
const  Dashboard =  lazy(() => import ("./Facility/Pages/DashboardNew/Dashboard")) ;
const  Details =  lazy(() => import ("./Facility/Pages/DashboardNew/components/Details")) ;
const  Profile =  lazy(() => import ("./Facility/Pages/Profile/Profile")) ;
const  ClockInHistory =  lazy(() => import ("./Facility/Pages/DashboardNew/components/ClockInHistory/ClockInHistory")) ;
const  Participants =  lazy(() => import ("./Facility/Pages/Participants/Participants")) ;
const  UserDashboard =  lazy(() => import ("./Facility/Pages/DashboardNew/UserDashboard/UserDashboard")) ;
const  IndividualBlog2 =  lazy(() => import ('./PAGES/individualBlog2')) ;
const  ForgotPassword =  lazy(() => import ("./Facility/Pages/ForgotPassword/ForgotPass")) ;
const  ResetPassword =  lazy(() => import ("./Facility/Pages/ForgotPassword/ForgotPass")) ;
const  UserDetails =  lazy(() => import ("./Facility/Pages/DashboardNew/UserDashboard/components/UserDetails")) ;
const  UserProfile =  lazy(() => import ("./Facility/Pages/DashboardNew/UserDashboard/components/Profile/Profile")) ;
const  Instructor =  lazy(() => import ("./Facility/Pages/Instructors/Instructors")) ;
const  RejectedParticipants=  lazy(() => import ("./Facility/Pages/Participants/Rejected")) ;
const  UpdateEvents=  lazy(() => import ("./Facility/Pages/Events/UploadEvent")) ;
const  Events=  lazy(() => import ("./Facility/Pages/Events/Events")) ;
const  Tasks=  lazy(() => import ("./Facility/Pages/Tasks/Tasks")) ;
const  TaskQuestion=  lazy(() => import ("./Facility/Pages/Tasks/TaskQuestions")) ;
const  HomeComponent=  lazy(() => import ("./components/HomeComponent")) ;













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
      element: <UserDashboard1 />,
      path: '/userDashboard1'
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
      element: <HomeComponent />,
      path: '/homeComponent'
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
      element: <ResetPassword />,
      path: '/resetPassword'
    },
    {
      element: <TaskQuestion />,
      path: '//taskQuestions/:taskId'
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
        {
          element: <Instructor />,
          path: '/dashboard/details/instructors'
        },
        {
          element: <UpdateEvents />,
          path: '/dashboard/details/updatedEvent'
        },
        {
          element: <Events />,
          path: '/dashboard/details/events'
        },
        {
          element: <RejectedParticipants />,
          path: '/dashboard/details/rejectedParticipants'
        },
        {
          element: <Tasks />,
          path: '/dashboard/details/tasks'
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
