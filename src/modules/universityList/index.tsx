import React from "react";
import { universityModel } from "./models/unversityItemModel";
import CardItemUniversity from "./components/CardItemUnivirsity";
import "./style.scss";
import Heading from "@/components/common/form/Headings";
const data = [
  {
    "state-province": null,
    domains: ["hmc.edu"],
    name: "Harvey Mudd College",
    country: "United States",
    web_pages: ["http://www.hmc.edu/"],
    alpha_two_code: "US",
  },
  {
    "state-province": null,
    domains: ["harvard.edu"],

    name: "Harvard University",
    country: "United States",
    web_pages: ["http://www.harvard.edu/"],
    alpha_two_code: "US",
  },
];
type Props = {};

console.log(data[0]["state-province"]);
const University = (props: Props) => {
  return (
    <div className="university">
      <Heading title="Resultat de la Recherche:" level={4} />
      <div className="university__list">
        {data.map((item: any, key) => (
          <CardItemUniversity data={item} key={key} />
        ))}
      </div>
    </div>
  );
};

export default University;
