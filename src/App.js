import React from "react";
import NameJson from "./Componet/NameJson/NameJson";
import Navbar from "./Componet/Navbar/Navbar";
import Skills from "./Componet/Skills/Skills";
const App = () => {
  return (
    <div>
      <Navbar />
      <NameJson />
      <Skills />
      {/* <li> JS is Fun</li> */}
    </div>
  );
};
export default App;
