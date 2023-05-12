import {
  BrowserRouter,
  HashRouter,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import "./style/fonts/fonts.css";
import "./style/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRoutes from "./routes pack/MainRoutesPack";
import Banner from "./components/Banner";

const Router =
  process.env.NODE_ENV === "development" ? BrowserRouter : HashRouter;
export default function App() {
  return (
    <div>
      <Banner/>

      <Router basename="/">
        <MainRoutes/>
      </Router>
    </div>
  );
}
