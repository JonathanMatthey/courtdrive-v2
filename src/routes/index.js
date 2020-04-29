import async from "../components/Async";

import {
  Sliders as SlidersIcon,
  GitPullRequest as GitPullRequestIcon,
  FileText as FileTextIcon,
  Search as SearchIcon,
  Users as UsersIcon,
  Bell as Bellicon
} from "react-feather";

// Auth
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import Page404 from "../pages/auth/Page404";
import Page500 from "../pages/auth/Page500";


// Dashboards
const Default = async(() => import("../pages/dashboards/Default"));

const filingsRoutes = {
  path: "/filings",
  name: "Filings",
  icon: FileTextIcon,
  component: Default,
  children: null
};

const advancedSearchRoutes = {
  path: "/search",
  name: "Advanced Search",
  icon: SearchIcon,
  component: Default,
  children: null
};

const integrationsRoutes = {
  path: "/integrations",
  name: "Integrations",
  icon: GitPullRequestIcon,
  component: Default,
  children: null
};

const dashboardRoutes = {
  path: "/",
  name: "Dashboard",
  icon: SlidersIcon,
  component: Default,
  children: null
};


const authRoutes = {
  path: "/auth",
  name: "Auth",
  icon: UsersIcon,
  badgeColor: "secondary",
  badgeText: "Special",
  children: [
    {
      path: "/auth/sign-in",
      name: "Sign In",
      component: SignIn
    },
    {
      path: "/auth/sign-up",
      name: "Sign Up",
      component: SignUp
    },
    {
      path: "/auth/reset-password",
      name: "Reset Password",
      component: ResetPassword
    },
    {
      path: "/auth/404",
      name: "404 Page",
      component: Page404
    },
    {
      path: "/auth/500",
      name: "500 Page",
      component: Page500
    }
  ]
};



// Dashboard specific routes
export const dashboard = [
  dashboardRoutes,
  filingsRoutes,
  advancedSearchRoutes,
  integrationsRoutes,
  authRoutes
];


// Auth specific routes
export const page = [authRoutes];

// All routes
export default [
  dashboardRoutes,
  filingsRoutes,
  advancedSearchRoutes,
  integrationsRoutes
];
