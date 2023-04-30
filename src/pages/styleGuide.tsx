import React, { useState } from "react";
import InputSearch from "@/components/common/form/inputSearch";
type Props = {};

const styleGuide = (props: Props) => {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <>
      <InputSearch value={value} onChange={(val) => setValue(val)} />
    </>
  );
};

export default styleGuide;
