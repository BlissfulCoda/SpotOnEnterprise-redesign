import Components from "./Components/Components";

import { DarkModeProvider } from "./Context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <section>
        <Components />
      </section>
    </DarkModeProvider>
  );
}

export default App;
