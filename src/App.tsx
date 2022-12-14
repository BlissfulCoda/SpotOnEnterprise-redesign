import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Components from "./Components/Components";


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
      <Toaster position="top-center" reverseOrder={false} />
    </DarkModeProvider>
  );
}

export default App;
