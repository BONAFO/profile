import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AboutMe from "../pages/AboutMe";
import MyProyects from "../pages/MyProyects";
import Contact from "../pages/Contact";

export default function MainRoutes() {
  return (
    <div>
      <Routes>
        <Route exact strict path="/" element={<MainPage />} />
        <Route exact strict path="/about-me" element={<AboutMe />} />
        <Route exact strict path="/my-proyects" element={<MyProyects />} />
        <Route exact strict path="/contact-me" element={<Contact />} />
      </Routes>
    </div>
  );
}
