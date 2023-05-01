import { useState } from "react";
import CustomButton from "./components/common/ui/customButton";

import StyleGuide from "@/pages/styleGuide";
import Navbar from "@/components/layouts/Navbar";
function App() {
  const [searchData, setSearchData] = useState("");
  const handleChange = (e: any) => {
    setSearchData(e);
  };

  const searchDataFromServer = () => {
    console.log(searchData, "klsdf");
  };
  return (
    <div className="app">
      <Navbar
        onSearchDataFromServer={searchDataFromServer}
        value={searchData}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
