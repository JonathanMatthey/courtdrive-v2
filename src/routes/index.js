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


import CaseFolders from "../pages/casefolders";
import Filings from "../pages/filings";


// Dashboards
const Default = async(() => import("../pages/dashboards/Default"));

const filingsRoutes = {
  path: "/filings",
  name: "Filings",
  icon: FileTextIcon,
  component: Filings,
  children: [
    {
      path: "/filings/case-lookup",
      name: "Case Lookup",
      component: Filings
    },
    {
      path: "/filings/pacer-search",
      name: "PACER Search",
      component: Filings
    },
    {
      path: "/filings/3",
      name: "Reports",
      component: Filings
    },
    {
      path: "/filings/4",
      name: "Business BK Filings",
      component: Filings
    }
  ]
};

const advancedSearchRoutes = {
  path: "/search",
  name: "Advanced Search",
  icon: SearchIcon,
  component: Default,
  children: [
    {
      path: "/search/all-courts",
      name: "All Courts",
      component: Default
    },
    {
      path: "/search/bankruptcy",
      name: "Bankruptcy",
      component: Default
    },
    {
      path: "/search/civil",
      name: "Civil",
      component: Default
    },
    {
      path: "/search/criminal",
      name: "Criminal",
      component: Default
    },
    {
      path: "/search/appellate",
      name: "Appellate",
      component: Default
    }
  ]
};

const dailyDigestRoutes = {
  path: "/dailyDigest",
  name: "DailyDigest",
  icon: GitPullRequestIcon,
  component: Default,
  children: null
};

const customViewRoutes = {
  path: "/customView",
  name: "CustomView",
  icon: GitPullRequestIcon,
  component: Default,
  children: null
};

const ECFEmailsRoutes = {
  path: "/ecf-emails",
  name: "ECF Emails",
  icon: GitPullRequestIcon,
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
  children: [
    {
      path: "/",
      name: "Dashboard",
      component: Default
    },
    {
      path: "/case-folders",
      name: "Case Folders",
      component: CaseFolders
    }
  ]
};


const recentRoutes = {
  path: "/recent",
  name: "Recent",
  header: "Helpful links",
  badgeColor: "primary",
  badgeText: "5",
  icon: SlidersIcon,
  containsHome: true,
  children: [
    {
      path: "/dashboard/default",
      name: "Default",
      component: Default
    }
  ]
}


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
  authRoutes,
  dailyDigestRoutes,
  customViewRoutes,
  ECFEmailsRoutes,
  integrationsRoutes
];


// Auth specific routes
export const page = [authRoutes];

// All routes
export default [
  dashboardRoutes,
  filingsRoutes,
  advancedSearchRoutes,
  dailyDigestRoutes,
  customViewRoutes,
  ECFEmailsRoutes,
  integrationsRoutes
];
