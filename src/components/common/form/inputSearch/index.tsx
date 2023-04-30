import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./style.scss";

type Props = {
  onChange: (value: string) => void;
  value: string;
};

const index = ({ onChange, value }: Props) => {
  const [isBordered, setIsBordered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusedInput = () => {
    setIsBordered(true);
    setIsFocused(true);
  };

  const handleBlurInput = () => {
    setIsBordered(false);
    setTimeout(() => {
      setIsFocused(false);
    }, 0);
  };

  return (
    <div className={`input-search ${isBordered ? "is-bordered" : ""}`}>
      {isFocused && (
        <BsSearch
          onClick={() => console.log("clicked")}
          style={{ marginRight: 10 }}
          size={20}
          fontWeight="bold"
        />
      )}
      <input
        onFocus={handleFocusedInput}
        onBlur={handleBlurInput}
        placeholder="Rechercher"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="input-search__icon">
        {isFocused ? (
          <AiOutlineCloseCircle
            onClick={() => onChange("")}
            size={20}
            fontWeight="bold"
          />
        ) : (
          <BsSearch color="#ccc" size={20} fontWeight="bold" />
        )}
      </div>
    </div>
  );
};

export default index;
