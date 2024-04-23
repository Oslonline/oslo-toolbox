import Header from "./components/Header/Header";
import Sidebar from "./components/SideBar/SideBar";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="flex">
            <aside className="sticky top-0 h-screen">
                <Sidebar />
            </aside>
            <main className="flex w-full flex-col ">
                <Header />
                <Outlet />
            </main>
        </div>
    );
}

export default App;
