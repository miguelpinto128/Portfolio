/* eslint-disable @typescript-eslint/no-explicit-any */
import { generateProps } from "styled-gen";
import { FC, HTMLAttributes, ReactNode } from "react";
import { transitionsDelay } from "../../styles/basicStyles";
import styled, { css } from "styled-components";

export interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?:
    | "header-link"
    | "header-language"
    | "dropdown-menu"
    | "mobile-link"
    | "mobile-language"
    | "link"
    | "footer-text"
    | "footer_link";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

const CustomTag = styled.p<any>`
  ${({ hoverColor }) =>
    hoverColor &&
    css`
      font-family: "Poppins", sans-serif;
      cursor: pointer;
      transition: color ${transitionsDelay} linear;

      &:hover {
        color: ${hoverColor};
      }
    `}

  ${generateProps};
`;

export const Typography: FC<TypographyProps & any> = ({
  children,
  as,
  variant = "body",
  ...props
}) => {
  if (as === undefined) {
    if (variant == "title-h1") {
      as = "h1";
    } else {
      as = "span";
    }
  }

  return (
    <CustomTag as={as} className={`typography-${variant}`} {...props}>
      {children}
    </CustomTag>
  );
};

export default Typography;
