
import "./App.css";
import { useContext } from "react";
import { themeContext } from "./Context";
import { Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch/404";
import Root from "./components/Root";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >

      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
