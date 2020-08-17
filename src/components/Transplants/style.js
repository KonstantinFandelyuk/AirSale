import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px 15px",
    maxWidth: "280px",
    border: "1px solid grey",
    [theme.breakpoints.down("sm")]: {},
    background: "white",
    color: "black",
    borderRadius: "10px",
    maxHeight: "240px",
  },
  title: {
    fontSize: "1.5rem",
  },
}));
export default useStyles;
