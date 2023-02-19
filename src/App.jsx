import { useContext } from "react";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Intro from "./components/Intro";
import ProductList from "./components/ProductList";
import Toggle from "./components/Toggle";
import { ThemeContext } from "./components/context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <ProductList />
      <Education />
      <Contact />
    </div>
  );
};

export default App;
