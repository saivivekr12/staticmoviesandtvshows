import React from "react";
import { styled } from "@mui/material/styles";
// import logo from '../assets/logo.svg'
import { ReactComponent as ICON } from "../../assets/logo.svg";
import { ReactComponent as HomeIcon } from "../../assets/icon-nav-home.svg";
import { ReactComponent as MoviesIcon } from "../../assets/icon-nav-movies.svg";
import { ReactComponent as TvSeriesIcon } from "../../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIcon } from "../../assets/icon-nav-bookmark.svg";
import avatar from "../../assets/image-avatar.png";

import { NavLink } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

const LayoutContainer = styled("div")(({ theme }: any) => {
  return {
    padding: "32px 0px 32px 32px",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      padding:"0px 16px 0px 16px"
    },
  };
});

const Sidebar = styled("div")(({ theme }: any) => ({
  width: "96px",
  height: "calc(100vh -  64px)",
  padding: "32px",
  backgroundColor: "#161d2f",
  borderRadius: "20px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    flexDirection: "row",
    height: "auto",
    padding: "21px 16px 19px 24px",
    justifyContent:"space-between"
  },
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  img: {
    width: "40px",
    height: "40px",
    borderRadius: "20px",
    border: "solid 1px #fff",
  },
}));

const NavItems = styled("ul")(({ theme }: any) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
  },
}));
const NavItem = styled("li")(({ theme }: any) => ({
  listStyle: "none",
  marginBottom: "40px",
  [theme.breakpoints.down("md")]: {
    marginBottom: 0,
    marginRight:"32px",
  },
  "&:hover": {
    svg: {
      path: {
        fill: "#fc4747",
      },
    },
  },
  "& .activeStyles": {
    svg: {
      path: {
        fill: "#fff",
      },
    },
  },
}));

const RightSpace = styled("div")(({ theme }: any) =>({
  maxWidth: "1400px",
  width: "100%",
  // margin:"0 auto",
  padding: "0px 32px 0px 32px",
  [theme.breakpoints.down("md")]: {
    padding: "0px 16px 0px 16px",
  },
}));

const sidebarRoutes = [
  {
    name: "HomeIcon",
    icon: <HomeIcon />,
    route: "/home",
  },
  {
    name: "MoviesIcon",
    icon: <MoviesIcon />,
    route: "/movies",
  },
  {
    name: "TvShowsIcon",
    icon: <TvSeriesIcon />,
    route: "/tv-shows",
  },
  {
    name: "BookmarkedIcon",
    icon: <BookmarkIcon />,
    route: "/bookmarked",
  },
];

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Sidebar>
        <ICON  />
        <NavItems>
          {sidebarRoutes.map((routes) => (
            <NavItem key={routes.name}>
              <NavLink
                to={routes.route}
                className={({ isActive }) => (isActive ? "activeStyles" : "")}
              >
                {routes.icon}
              </NavLink>
            </NavItem>
          ))}
        </NavItems>
        <img src={avatar} alt="person-logo" />
      </Sidebar>
      <RightSpace>{children}</RightSpace>
    </LayoutContainer>
  );
};

export default Layout;
