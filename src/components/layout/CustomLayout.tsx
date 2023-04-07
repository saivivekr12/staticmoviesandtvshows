import { styled } from "@mui/material/styles";
import { ReactComponent as ICON } from "../../assets/logo.svg";

const Layout = styled("div")((props: any) =>({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  "& .container": {
    width: "400px",
    background: "#161d2f",
    padding: "32px",
    [props.theme.breakpoints.down("sm")]: {
    maxWidth:"300px"
    },
  },
  "& .icon": {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginBottom: "84px",
  },
}));

const CustomLayout = ({ children }: any) => {
  return (
    <Layout>
      <div className="both">
        <div className="icon">
          <ICON />
        </div>
        <div className="container">{children}</div>
      </div>
    </Layout>
  );
};

export default CustomLayout;
