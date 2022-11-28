import Components from "./Components/Components";
import './styles/output.css';

import { DarkModeProvider } from "./Context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <Components />
    </DarkModeProvider>
  );
}

export default App;
