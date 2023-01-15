import { useState } from "react";
import "./App.scss";
import octokit from "./octokit";
import useThemeStore from "./store/useThemeStore";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import Search from "./components/Search/Search";
import DevCard from "./components/DevCard/DevCard";

function App() {
  const theme = useThemeStore((state) => state.theme);

  const [userData, setUserData] = useState({});

  const handleSearch = (username) => {
    if (!username) return;
    octokit
      .request("GET /users/{username}", {
        username,
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch(() => "");
  };
  return (
    <div className={`${theme} app`}>
      <div className="app__wrapper">
        <div className="app__header">
          <h1>devfinder</h1>
          <ThemeSwitch />
        </div>
        <div className="app__search">
          <Search onSearch={handleSearch} />
        </div>
        <div className="app__devCard">
          <DevCard data={userData} />
        </div>
      </div>
    </div>
  );
}

export default App;
