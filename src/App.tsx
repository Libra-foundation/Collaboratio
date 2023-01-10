import React from "react";
import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import DummyPage from "./Pages/DummyPage";

function App(): JSX.Element {
  return (
    <div>
      <NavbarComponent />
      <DummyPage />
    </div>
  );
}

export default App;
