import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export const NavButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "none",
    backgroundColor: "transparent",
    margin: "0 10px",
    "&:hover": {
      backgroundColor: "#f7f7f7",
    },

    "&span": {
        marginRight: '5px',
    },
    ["@media (max-width: 360px)"]: { fontSize: 14,
      padding: "6px 6px", }
  },
})(Button);