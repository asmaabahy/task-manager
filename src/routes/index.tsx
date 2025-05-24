import { createBrowserRouter } from "react-router";
import WelcomeLayout from "../layouts/WelcomeLayout";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import DashboardLayout from "../layouts/DashboardLayout";
import TodayTasksPage from "../pages/TodayTasksPage";
import UpcomingTasksPage from "../pages/UpcomingTasksPage";
import HomePage from "../pages/HomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "sign-up", element: <SignupPage /> },
    ],
  },
  {
    path: "/app",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <TodayTasksPage /> },
      { path: "upcoming-tasks", element: <UpcomingTasksPage /> },
    ],
  },
]);
