import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./main-page.css";
import Header from "./Header";
import FeaturedHouse from "./FeaturedHouse";
import SearchResults from "../search-results";
import HouseFilter from "./HouseFilter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses} />
        <Routes>
          <Route
            path="/house/:id"
            element={<HouseFromQuery allHouses={allHouses}></HouseFromQuery>}
          ></Route>
          <Route
            path="/searchresults/:country"
            element={<SearchResults allHouses={allHouses}></SearchResults>}
          ></Route>
          <Route
            exact
            path="/"
            element={<FeaturedHouse house={featuredHouse} />}
          />
        </Routes>
        <footer>
          Made with {"\u2764"} by ~
          <a href="https://twitter.com/Fideltodayy" target="blank">
            Fideltodayy
          </a>
        </footer>
      </div>
    </Router>
  );
}

export default App;
