import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Newsboard from "./Components/Newsboard";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <div className="container">
        <Newsboard category={category} />
      </div>
    </div>
  );
};

export default App;



