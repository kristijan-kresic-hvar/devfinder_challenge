import { useState } from "react";
import "./App.scss";
import octokit from "./octokit";
import useThemeStore from "./store/useThemeStore";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import Search from "./components/Search/Search";
import DevCard from "./components/DevCard/DevCard";

function App() {
  const theme = useThemeStore((state) => state.theme);

  const [userData, setUserData] = useState(null);
  const [noResults, setNoResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = (username) => {
    if (!username) return;
    setNoResults(false);
    setLoading(true);
    octokit
      .request("GET /users/{username}", {
        username,
      })
      .then((response) => {
        if (!response.data) {
          setLoading(false);
          return setNoResults(true);
        }
        setLoading(false);
        return setUserData(response.data);
      })
      .catch(() => {
        setLoading(false);
        setNoResults(true);
      });
  };
  const handleChange = () => {
    if (noResults === false) return;
    setNoResults(false);
  };
  return (
    <div className={`${theme} app`}>
      <div className="app__wrapper">
        <div className="app__header">
          <h1>devfinder</h1>
          <ThemeSwitch />
        </div>
        <div className="app__search">
          <Search
            onSearch={handleSearch}
            noResults={noResults}
            onChange={handleChange}
            loading={loading}
          />
        </div>
        <div className="app__devCard">
          {userData && <DevCard data={userData} />}
        </div>
      </div>
    </div>
  );
}

export default App;
