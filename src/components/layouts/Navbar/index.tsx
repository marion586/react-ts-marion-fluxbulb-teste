import React, { useEffect, useState } from "react";

import Paragraph from "antd/es/typography/Paragraph";
import InputSearch from "@/components/common/form/inputSearch";
import CustomButton from "@/components/common/ui/customButton";

import "./style.scss";
import { images } from "@/constants/images";
import {
  AiOutlinePlusCircle,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
} from "react-icons/ai";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { BsSearch } from "react-icons/bs";
import Heading from "@/components/common/form/Headings";
import { Colors, Positioning, Theme } from "@/themes/fluxbulb.theme";
interface Props {
  value: string;
  onChange: (e: any) => void;
  onSearchDataFromServer: () => void;
  onKeyPressed: (e: any) => void;
}

const Navbar = ({
  value,
  onChange,
  onSearchDataFromServer,
  onKeyPressed,
}: Props) => {
  const [isTopOfPage, setIsTopOfPage] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1100px)");
  const isAboveSearchScreens = useMediaQuery("(min-width: 780px)");
  const [isShowSearch, setIsShowSearch] = useState(isAboveSearchScreens);
  const [isHide, setIsHide] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    // on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    setIsShowSearch(isAboveSearchScreens);
  }, [isAboveSearchScreens, isHide]);
  return (
    <nav
      className={`navbar ${!isTopOfPage ? "isBorderBox" : ""}`}
      style={{ backgroundColor: Colors.white }}
    >
      <div className="navbar__dropdown">
        <div
          className={`navbar__dropdown-card relative ${
            isHide ? "isHide " : ""
          }`}
        >
          <div>
            <AiOutlineClose
              size={20}
              className="absolute top-2 right-2 cursor-pointer"
              onClick={() => setIsHide((prev) => !prev)}
            />
          </div>

          <div className="navbar__dropdown-item">
            <CustomButton
              type={Theme.button.primary}
              content="Rechercher"
              onClick={() => {
                onSearchDataFromServer();
                setIsHide((prev) => !prev);
              }}
              icon={<AiOutlineSearch />}
              size="large"
              width="100%"
              rounded={Theme.roundedButton.xl}
            />
          </div>
        </div>
      </div>
      <div className="navbar__left">
        {/* <Heading level={1} title="NFT-CARBONE" /> */}
        {useMediaQuery("(min-width: 827px)") ? (
          <div className="navbar__left-logo-grp">
            <img src={images.imgLogo} />
            <Heading
              title="FLUXBUILD"
              style={{ color: Colors.primary }}
              level={1}
            />
          </div>
        ) : (
          <img src={images.imgLogo} />
        )}

        {/* <Paragraph className="navbar__left-paragraph">
          Découvrir les projets
        </Paragraph> */}
      </div>

      <div className="navbar__right">
        {isShowSearch ? (
          <InputSearch
            value={value}
            onChange={(val) => onChange(val)}
            onKeyPressed={onKeyPressed}
            placeholder="Rechercher ici"
          />
        ) : (
          <div
            className="navbar__right-icon "
            onClick={() => setIsShowSearch(true)}
          >
            <div className="navbar__right-icon-grp ">
              <BsSearch size={20} fontWeight="bold" />
            </div>
          </div>
        )}

        {isAboveMediumScreens ? (
          <div className="flex gap-2 ">
            <CustomButton
              type={Theme.button.primary}
              content="Rechercher"
              onClick={onSearchDataFromServer}
              icon={<AiOutlineSearch />}
              size="large"
              width="200px"
              rounded={Theme.roundedButton.xl}
            />
          </div>
        ) : (
          <div className={`icon `} onClick={() => setIsHide((prev) => !prev)}>
            <AiOutlineSearch size={20} />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
