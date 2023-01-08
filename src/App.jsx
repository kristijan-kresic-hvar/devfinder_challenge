import "./App.scss";
import useThemeStore from "./store/useThemeStore";

function App() {
  const theme = useThemeStore((state) => state.theme);

  console.log(theme);
  return <div className="app">App</div>;
}

export default App;
