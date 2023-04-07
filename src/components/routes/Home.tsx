import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Layout from "../layout/Layout";
import Search from "../Search";
import { useContext } from "react";
import SearchPage from "../../pages/SearchPage";
import { MoviesContext } from "../../context/MoviesContext";
import Lists from "../Lists";
import useSearch from "../../hooks/useSearch";

export const CustomHeading: any = styled(Typography)({
  fontSize: "32px",
  fontWeight: 300,
  letterSpacing: "-0.5px",
  color: "#fff",
  marginBottom: "25px",
  fontFamily: 'Outfit'
});

  const Home = () => {
  const { data } = useContext(MoviesContext);
  const {filteredData,text,handleChange,handleBookmark}  = useSearch(data);

  const recommended = data.filter((d) => !d.isTrending);

  const trending = data.filter((d) => d.isTrending).slice(0, 3);

  return (
    <Layout>
      <Search handleChange={handleChange} text={text} placeholderText="movies or TV series" />
      {filteredData.length || text.length > 0 ? (
        <SearchPage data={filteredData} text={text} />
      ) : (
        <Box >
          <CustomHeading component={"h1"}>Trending</CustomHeading>
           <Lists listData={trending} isTrending handleBookmark={handleBookmark}/>
          <CustomHeading component={"h1"}>Recommended for you</CustomHeading>
          <Lists listData={recommended} handleBookmark={handleBookmark}/>
        </Box>
      )}
    </Layout>
  );
};

export default Home;
