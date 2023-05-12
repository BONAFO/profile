import {
    BrowserRouter,
    Route,
    Routes,
    HashRouter,
    Link,
  } from "react-router-dom";
  
  export default function App() {
    return (
      <div>
        <HashRouter basename="/">
          <Link to={"/cosai"}>
            <h3>ASD</h3>
          </Link>
          <Link to={"/perro"}>
            <h3>perrr</h3>
          </Link>
          <Link to={"/bethesda"}>
            <h3>bugitesda</h3>
          </Link>
  
          <Routes>
            <Route exact strict path="/cosai" element={<h1>apscjoqjwe2|1</h1>} />
            <Route
              path="/perro"
              element={
                <img src="https://www.laguiadelvaron.com/wp-content/uploads/2018/03/facebook-omnitrix7-1520172526.jpg"></img>
              }
            />
            
          <Route
            exact
            strict
            path="/bethesda"
            element={
              <img src="https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Bethesda-Memes.jpg"></img>
            }
          />    
          </Routes>
  
  
          
        </HashRouter>
      </div>
    );
  }
  