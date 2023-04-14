import { BrowserRouter, Route, Routes, HashRouter, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <HashRouter basename="/">
        
        
        <Link to={"/cosai"}><h3>ASD</h3></Link>
        <Link to={"/cosai/perro"}><h3>perrr</h3></Link>
        
        <Routes>
          <Route  exact strict path="/cosai" element={<h1>apscjoqjwe2|1</h1>} />
          <Route
            path="/cosai/perro"
            element={
              <img src="https://www.laguiadelvaron.com/wp-content/uploads/2018/03/facebook-omnitrix7-1520172526.jpg"></img>
            }
          />
        </Routes>
      </HashRouter>
    </div>
  );
}
