import React from "react";
import icons from "../../../public/assets/icons";
import { SvgWrapper } from "./styles";

const Icon = ({ icon, ...forwardProps }: any) => {
  const selectedIcon = icons[icon];

  if (!selectedIcon) {
    return null;
  }

  return (
    <SvgWrapper {...forwardProps} {...selectedIcon}>
      {selectedIcon.icon}
    </SvgWrapper>
  );
};

export default Icon;
