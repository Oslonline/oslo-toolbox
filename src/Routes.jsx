import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Error from "./pages/Error/Error";
import About from "./pages/About";
import { Home, HomeCss, HomeConvert, HomeGen, HomeSecurity } from "./pages/Home";
import { Length, Mass, Area, Volume, Temperature } from "./pages/Tools/UnitsConvert";
import { Gradient, BoxShadow } from "./pages/Tools/Css";
import { Hash, Lorem, Password, QrCode } from "./pages/Tools/Generator";
import IpLookup from "./pages/Tools/Security/IpLookup";

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="About" index element={<About />} />
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
          <Route path="Generators">
            <Route index element={<HomeGen />} />
            <Route path="Password" element={<Password />} />
            <Route path="Lorem" element={<Lorem />} />
            <Route path="QrCode" element={<QrCode />} />
            <Route path="Hash" element={<Hash />} />
          </Route>
          <Route path="Security">
            <Route index element={<HomeSecurity />} />
            <Route path="IpLookup" element={<IpLookup />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default MainRouter;
