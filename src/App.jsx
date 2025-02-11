import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header/Header";
import Sidebar from "./components/sidebar/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex bg-white dark:bg-gray-950 dark:text-gray-50">
      <aside className="max-h-screenF sticky left-0 top-0 h-screen">
        <Sidebar />
      </aside>
      <main className="flex w-full flex-col">
        <Header />
        <Outlet />
        <Analytics />
        <SpeedInsights />
      </main>
    </div>
  );
}

export default App;
