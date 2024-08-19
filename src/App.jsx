import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex">
      <aside className="sticky left-0 top-0 h-screen max-h-screen">
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
