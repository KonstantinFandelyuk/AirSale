import { makeStyles } from "@material-ui/core";

const HomeStyle = makeStyles((theme) => ({
  root: {
    background: "rgba(0,0,0,0.9)",
    maxWidth: "1200px",
    minHeight: "100vh",
    color: "white",
    paddingTop: "20px",
    textAlign: "center",
  },
  h1: {
    padding: "0px 10px",
    fontSize: "6rem",
    marginBottom: "50px",
    borderRadius: "20px",
    background: "white",
    color: "black",
    display: "inline-block",
  },
  content: { display: "flex", justifyContent: "center", maxWidth: "900px" },
  second_item: { marginLeft: "30px" },
}));
export default HomeStyle;
