import React, { useState } from "react";
import InputSearch from "@/components/common/form/inputSearch";
import Heading from "@/components/common/form/Headings";
type Props = {};

const styleGuide = (props: Props) => {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <>
      <Heading title="FLUXBULB" style={{ color: "#ccc" }} level={1} />
      <InputSearch value={value} onChange={(val) => setValue(val)} />
    </>
  );
};

export default styleGuide;
