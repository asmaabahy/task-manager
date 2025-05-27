import { createBrowserRouter, Navigate } from "react-router";
import WelcomeLayout from "../layouts/WelcomeLayout";
import AuthPage from "../pages/AuthPage";
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
      { path: "auth", element: <AuthPage /> },
      { path: "sign-up", element: <Navigate to="/auth?mode=signup" replace /> },
      { path: "login", element: <Navigate to="/auth?mode=login" replace /> },
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
