import "./App.scss";
import useThemeStore from "./store/useThemeStore";
import ThemeSwitch from "./components/ThemeSwitch/ThemeSwitch";
import Search from "./components/Search/Search";

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div className={`${theme} app`}>
      <div className="app__wrapper">
        <div className="app__header">
          <h1>devfinder</h1>
          <ThemeSwitch />
        </div>
        <div className="app__search">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default App;
