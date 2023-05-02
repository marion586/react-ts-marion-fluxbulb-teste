import { useState } from "react";
import CustomButton from "./components/common/ui/customButton";
import University from "./modules/universityList";
import StyleGuide from "@/pages/styleGuide";

import Navbar from "@/components/layouts/Navbar";
import "./App.scss";
import { useDispatch } from "react-redux";
import { setSearchDataStore } from "./modules/universityList/reducers";

function App() {
  const [searchData, setSearchData] = useState("");
  const [searchDataServer, setSearchDataServer] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setSearchData(e);
    setSearchDataServer(e);
  };

  const searchDataFromServer = () => {
    setSearchDataServer(searchData);
    dispatch(setSearchDataStore(searchData));
  };
  return (
    <div className="app">
      <Navbar
        onSearchDataFromServer={searchDataFromServer}
        value={searchData}
        onChange={handleChange}
      />

      <div className="app__container">
        <University />
      </div>
    </div>
  );
}

export default App;
