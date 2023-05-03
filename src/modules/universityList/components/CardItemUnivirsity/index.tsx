import React from "react";
import "./style.scss";
import Heading from "@/components/common/form/Headings";
import { MdFavoriteBorder } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { universityModel } from "../../models/unversityItemModel";

type Props = {
  data: universityModel;
};
const index = ({
  data: { name, alpha_two_code, web_pages, domains, country, ...rest },
}: Props) => {
  return (
    <div className="card">
      <div className="card__header">
        <Heading
          title={name?.split(" ")[name?.split(" ").length - 1]}
          level={3}
          style={{ color: "white" }}
        />
        <MdFavoriteBorder
          className="card__header-icon"
          color="white"
          size={25}
        />
      </div>

      <div className="card__body">
        <Heading title={name} level={5} style={{ color: "gray" }} />

        <span className="card__body-ca">{alpha_two_code} </span>
        <span>{domains[0]}</span>
        <div className="card__body-address">
          <FaMapMarkerAlt />
          <span>
            {rest && rest["state-province"]} {country}
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
