/* eslint-disable indent */
import { css } from "@emotion/css";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { COLORS } from "@src/lib/constants/colors";
import { RADIUS } from "@src/lib/constants/radius";
import { calcSpacing, SPACING } from "@src/lib/constants/spacing";

export const MainWrapper = styled(Box)`
  flex-grow: 1;
  padding: ${calcSpacing(8)} 0;
`;

export const SectionWrapper = styled(Box)`
  width: 100%;
  padding: ${SPACING.SIZE_48} 0;
`;

export const SubSectionWrapper = styled(Box)`
  width: 100%;
  padding: ${SPACING.SIZE_32} 0;
`;

export const SmallSectionWrapper = styled(Box)`
  width: 100%;
  height: 100%;
   padding: ${SPACING.SIZE_24};
`;

export const StyledButton = styled(Button)`
  ${({ btnBg, textClr, borderClr, fontWeight }) => `
    ${btnBg ? `background-color: ${btnBg} !important;` : ""}
    ${borderClr ? `border-color: ${borderClr} !important;` : ""}
    ${textClr ? `color: ${textClr} !important;` : ""}
    ${fontWeight ? `font-weight: ${fontWeight} !important;` : ""}
    
    &:hover, &:focus {
      ${btnBg ? `background-color: ${btnBg} !important;` : ""}
      ${textClr ? `color: ${textClr} !important;` : ""}
      ${borderClr ? `border-color: ${borderClr} !important;` : ""}
      opacity: 0.9 !important; 
    }
  `}
`;

export const FlexBox = styled(Box)`
  display: flex;
  flex-direction: ${({ col }) => (col ? "column" : "row")};
  ${({ flexcenter }) =>
    flexcenter === "true" &&
    css`
      align-items: center;
      justify-content: center;
    `};
`;

// @ Generate Styles

export function generateFlexStyles(options) {
  const {
    direction = "row", // Flex direction (row, column, etc.)
    justify = "flex-start", // Justify content (center, space-between, etc.)
    align = "stretch", // Align items (center, flex-start, etc.)
    wrap = "nowrap", // Flex wrap (wrap, nowrap, wrap-reverse)
    gap = "0", // Gap between items
  } = options;

  return {
    display: "flex",
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align,
    flexWrap: wrap,
    gap,
  };
}

export const carouselNavBtn = (type, color, customStyles = {}) => ({
  "&.swiper-button-disabled": {
    display: "none",
  },
  cursor: "pointer",
  color: COLORS.GLOBAL.BLACK,
  ...generateFlexStyles({
    align: "center",
    justify: "center",
  }),
  width: 50,
  height: 50,
  border: `3px solid ${color || COLORS.GLOBAL.PRIMARY1}`,
  borderRadius: RADIUS.CIRCLE,
  top: "50%",
  left: type === "prev" ? 0 : "auto",
  right: type === "prev" ? "auto" : 0,
  svg: {
    width: "30px",
    height: "33px",
    fill: color || COLORS.GLOBAL.PRIMARY1,

    "& path": {
      fill: color || COLORS.GLOBAL.PRIMARY1,
    },
  },
  transform: `translateY(-50%) ${type === "prev" ? "scaleX(-1)" : ""}`,
  ...customStyles,
});

export const scaleUpTransition = () => ({
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transition: "transform .3s ease-in-out",
    transform: "scale(1.15)",
  },
});
