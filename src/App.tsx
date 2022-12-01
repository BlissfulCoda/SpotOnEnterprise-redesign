import { useEffect } from "react";
import Components from "./Components/Components";
import "./styles/output.css";

import { DarkModeProvider } from "./Context/DarkModeContext";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <DarkModeProvider>
      <Components />
    </DarkModeProvider>
  );
}

export default App;
