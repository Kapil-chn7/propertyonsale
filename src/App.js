import "./App.css";
import HeaderComp from "./components/headerComp";
import FooterComp from "./components/footerComp";
import MainbodyComp from "./components/mainbodyComp";
import PropertyState from "./context/propertyState";
import FilterComp from "./components/filterComp";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
function App() {
  return (
    <PropertyState>
      <div className="App">
        <HeaderComp />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <FilterComp />
                <MainbodyComp />
              </div>
            }
          />
          <Route exact path="/About" element={<About />} />
        </Routes>

        <FooterComp />
      </div>
    </PropertyState>
  );
}

export default App;
