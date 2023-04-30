import { useState } from "react";
import CustomButton from "./components/common/ui/customButton";

import StyleGuide from "@/pages/styleGuide";
function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="app">
      <h1>mon premier test</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        count is {count}
      </button>
      <CustomButton
        type={{ borderRadius: 20, backgroundColor: "blue" }}
        content="Click me"
        onClick={handleClick}
        size="small"
        width="100px"
      />
      <StyleGuide />
    </div>
  );
}

export default App;
