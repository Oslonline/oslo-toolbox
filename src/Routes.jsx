import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Error from "./pages/Error/Error";
import { Home, HomeCss, HomeConvert } from "./pages/Home";
import { Length, Mass, Area, Volume, Temperature } from "./pages/Tools/UnitsConvert";
import Gradient from "./pages/Tools/Css/Gradient";
import App from "./App";
import BoxShadow from "./pages/Tools/Css/Boxshadow";

function MainRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="Error" element={<Error />} />
                    <Route path="Css">
                        <Route index element={<HomeCss />} />
                        <Route path="Gradient" element={<Gradient />} />
                        <Route path="Box-shadow" element={<BoxShadow />} />
                    </Route>
                    <Route path="UnitsConvert">
                        <Route index element={<HomeConvert />} />
                        <Route path="Mass" element={<Mass />} />
                        <Route path="Length" element={<Length />} />
                        <Route path="Area" element={<Area />} />
                        <Route path="Volume" element={<Volume />} />
                        <Route path="Temperature" element={<Temperature />} />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default MainRouter;
