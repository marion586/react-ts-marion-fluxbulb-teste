import { useState } from "react";
import CustomButton from "./components/common/ui/customButton";

import StyleGuide from "@/pages/styleGuide";
import Navbar from "@/components/layouts/Navbar";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="app">
      <Navbar />
    </div>
  );
}

export default App;
