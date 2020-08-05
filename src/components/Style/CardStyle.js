import { makeStyles } from "@material-ui/core";

const CardStyle = makeStyles((theme) => ({
  root: {
    padding: "20px 0px",
    maxWidth: "520px",
    [theme.breakpoints.down("sm")]: {},
    background: "white",
    color: "black",
    borderRadius: "10px",
    marginTop: "20px",
    border: "1px solid #2196f3",
  },
  sum: {
    color: "#2196f3",
    fontWeight: "600",
    fontSize: "24px",
    lineHeight: "24px",
  },
  title: {
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "18px",
    color: " #a0b0b9",
    marginBottom: "5px",
  },
  itemPrice: { justifyContent: "space-between", alignItems: "center", marginBottom: "15px" },
  itemInformation: { justifyContent: "space-evenly", alignItems: "center", marginBottom: "15px" },
}));
export default CardStyle;
