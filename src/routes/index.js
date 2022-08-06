import { Suspense, lazy } from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import MainLayout from '../layouts/main';
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> }
      ]
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to="/dashboard/overview" replace /> },
        { path: 'overview', element: <Overview /> },

        // Staff
        { path: 'staff', element: <StaffDirectory /> },
        { path: 'staff/new', element: <StaffCreate /> },
        { path: 'staff/:id', element: <StaffProfile /> },
        { path: 'staff/:id/edit', element: <StaffCreate /> },

        // Routes
        { path: 'routes', element: <RouteDirectory /> },
        { path: 'routes/new', element: <RouteCreate /> },
        { path: 'routes/:id', element: <RouteProfile /> },
        { path: 'routes/:id/edit', element: <RouteCreate /> },

        // Vehicles
        { path: 'vehicles', element: <VehicleDirectory /> },
        { path: 'vehicles/new', element: <VehicleCreate /> },
        { path: 'vehicles/:id', element: <VehicleProfile /> },
        { path: 'vehicles/:id/edit', element: <VehicleCreate /> }
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <LandingPage /> },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('../pages/authentication/Login')));
const Register = Loadable(lazy(() => import('../pages/authentication/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/authentication/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/authentication/VerifyCode')));

// Dashboard
const Overview = Loadable(lazy(() => import('../pages/dashboard/overview/Overview')));

// Staff
const StaffDirectory = Loadable(lazy(() => import('../pages/dashboard/staff/StaffDirectory')));
const StaffProfile = Loadable(lazy(() => import('../pages/dashboard/staff/StaffProfile')));
const StaffCreate = Loadable(lazy(() => import('../pages/dashboard/staff/StaffCreate')));

// Routes
const RouteDirectory = Loadable(lazy(() => import('../pages/dashboard/routes/RouteDirectory')));
const RouteProfile = Loadable(lazy(() => import('../pages/dashboard/routes/RouteProfile')));
const RouteCreate = Loadable(lazy(() => import('../pages/dashboard/routes/RouteCreate')));

// Vehicles
const VehicleDirectory = Loadable(lazy(() => import('../pages/dashboard/vehicles/VehicleDirectory')));
const VehicleProfile = Loadable(lazy(() => import('../pages/dashboard/vehicles/VehicleProfile')));
const VehicleCreate = Loadable(lazy(() => import('../pages/dashboard/vehicles/VehicleCreate')));

// Main
const LandingPage = Loadable(lazy(() => import('../pages/external/LandingPage')));
const About = Loadable(lazy(() => import('../pages/external/About')));
const Contact = Loadable(lazy(() => import('../pages/external/Contact')));
const Faqs = Loadable(lazy(() => import('../pages/external/Faqs')));
const Pricing = Loadable(lazy(() => import('../pages/external/Pricing')));
const Payment = Loadable(lazy(() => import('../pages/external/Payment')));
const Page500 = Loadable(lazy(() => import('../pages/error/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/error/Page404')));

