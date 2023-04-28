import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <h1>mon premier test</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default App;
