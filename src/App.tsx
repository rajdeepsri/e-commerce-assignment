import { useState } from "react";
import Foods from "./components/Foods/Foods";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  const [activeCategory, setActiveCategory] = useState<string>("produce");
  return (
    <>
      <Navbar />
      <div className="main_page">
        <Sidebar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Foods
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </div>
    </>
  );
};

export default App;
