import App from "./App";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Error from "./pages/Error/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import { Length, Mass, Area, Volume, Temperature, Speed, Time } from "./pages/Tools/UnitsConvert";
import { Gradient, BoxShadow } from "./pages/Tools/Css";
import { Lorem, Password, QrCode /* ReadmeGenerator */ } from "./pages/Tools/Generator";
import { Hash, IpLookup, Uuid } from "./pages/Tools/Security";
import { ImagesConverter, Dither, Noise, Blur } from "./pages/Tools/Images";

import Error404 from "./pages/Error/Error404";
import ToolsPageLayout from "./layouts/ToolsPageLayout";
import Changelog from "./pages/Changelog";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const routesConfig = [
  { path: "Password", element: Password },
  { path: "Lorem", element: Lorem },
  { path: "QrCode", element: QrCode },
  // { path: "Readme", element: ReadmeGenerator },
  { path: "Mass", element: Mass },
  { path: "Length", element: Length },
  { path: "Area", element: Area },
  { path: "Volume", element: Volume },
  { path: "Temperature", element: Temperature },
  { path: "Speed", element: Speed },
  { path: "Time", element: Time },
  { path: "Ip-lookup", element: IpLookup },
  { path: "Hash", element: Hash },
  { path: "Uuid", element: Uuid },
  { path: "Gradient", element: Gradient },
  { path: "Box-shadow", element: BoxShadow },
  { path: "Images-converter", element: ImagesConverter },
  { path: "Dither", element: Dither },
  { path: "Noise", element: Noise },
  { path: "Blur", element: Blur },
];

function MainRouter() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="*" element={<Error404 />} />
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Changelogs" element={<Changelog />} />
          <Route path="Error" element={<Error />} />
          <Route path="Generators">
            {routesConfig.slice(0, 3).map(({ path, element }) => (
              <Route key={path} path={path} element={<ToolsPageLayout>{React.createElement(element)}</ToolsPageLayout>} />
            ))}
          </Route>
          <Route path="UnitsConvert">
            {routesConfig.slice(3, 10).map(({ path, element }) => (
              <Route key={path} path={path} element={<ToolsPageLayout>{React.createElement(element)}</ToolsPageLayout>} />
            ))}
          </Route>
          <Route path="Security">
            {routesConfig.slice(10, 13).map(({ path, element }) => (
              <Route key={path} path={path} element={<ToolsPageLayout>{React.createElement(element)}</ToolsPageLayout>} />
            ))}
          </Route>
          <Route path="Css">
            {routesConfig.slice(13, 15).map(({ path, element }) => (
              <Route key={path} path={path} element={<ToolsPageLayout>{React.createElement(element)}</ToolsPageLayout>} />
            ))}
          </Route>
          <Route path="Images">
            {routesConfig.slice(15).map(({ path, element }) => (
              <Route key={path} path={path} element={<ToolsPageLayout>{React.createElement(element)}</ToolsPageLayout>} />
            ))}
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default MainRouter;
