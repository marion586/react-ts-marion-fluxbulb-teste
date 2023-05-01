import React, { FC } from "react";
import { Button } from "antd";
import "./style.scss";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { Positioning } from "@/themes/fluxbulb.theme";
interface ButtonProps {
  content: string;
  type: React.CSSProperties | undefined;
  size?: SizeType;

  width?: string;
  icon?: JSX.Element; // optionnel ?;
  rounded?: object;
  onClick: () => void;
}

const ButtonCustom: FC<ButtonProps> = ({
  content,
  type,
  icon,

  size,
  width,
  rounded,
  onClick,
}) => {
  let fontSize = 10;
  switch (size) {
    case "small":
      fontSize = 10;
      break;
    case "middle":
      fontSize = 14;
      break;
    case "large":
      fontSize = 16;
      break;
    default:
      fontSize = 14;
      break;
  }
  return (
    <>
      <Button
        icon={icon}
        style={{
          ...type,
          ...rounded,
          fontSize: fontSize,
          width: width,
          ...Positioning.center,
        }}
        size={size}
        onClick={(e) => {
          e.preventDefault;
          onClick();
        }}
      >
        <span className="flex items-center gap-2"> {content}</span>
      </Button>
    </>
  );
};

export default ButtonCustom;
