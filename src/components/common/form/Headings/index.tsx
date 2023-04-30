import React, { FC } from "react";
import { Typography } from "antd";
import { Theme } from "@/themes/fluxbulb.theme";
import "./style.scss";

interface HeadingProps {
  level: 5 | 1 | 2 | 3 | 4 | undefined;
  title: string;
  icon?: JSX.Element; // optionnel ?
  cardTitle?: boolean;
  style?: Object;
}

const { Title } = Typography;
const Heading: FC<HeadingProps> = ({
  level,
  title,
  icon,
  cardTitle,
  style,
}) => {
  return (
    <>
      <Title
        level={level}
        style={
          cardTitle
            ? { ...Theme.titleCard, ...style }
            : { ...Theme.title, ...style }
        }
      >
        {icon} {title}
      </Title>
    </>
  );
};

export default Heading;
