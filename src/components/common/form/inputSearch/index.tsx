import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./style.scss";

type Props = {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
};

const index = ({ onChange, value, placeholder }: Props) => {
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
    }, 1000);
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
        placeholder={placeholder ? placeholder : "Rechercher"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div className="input-search__icon">
        {isFocused ? (
          <AiOutlineCloseCircle
            size={20}
            fontWeight="bold"
            onClick={() => onChange("")}
            className="close-icon"
          />
        ) : (
          <BsSearch color="#ccc" size={20} fontWeight="bold" />
        )}
      </div>
    </div>
  );
};

export default index;
