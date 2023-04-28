import { IStyle } from "styles/IStyle";

export const classes: IStyle = {
  ".MuiBox-root": {
    border: "none",
    alignSelf: "center",
  },
  ".MuiTabs-scroller": {
    overflow: "auto !important",
  },
  ".MuiButtonBase-root": {
    fontSize: "16px",
    fontWeight: "700",
  },
  "@media screen and (max-width: 600px)": {
    ".MuiButtonBase-root": {
      fontSize: "14px",
      fontWeight: "700",
    },
  },
};
