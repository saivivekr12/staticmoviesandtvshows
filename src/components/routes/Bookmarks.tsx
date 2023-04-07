import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import useSearch from "../../hooks/useSearch";
import Layout from "../layout/Layout";
import Search from "../Search";
import SearchPage from "../../pages/SearchPage";
import { CustomHeading } from "./Home";
import Lists from "../Lists";
import { Box, Grid } from "@mui/material";

const Bookmarked = () => {
  const { data } = useContext(MoviesContext);
  const allBookmarkedMovies= data.filter(bmd=>bmd.isBookmarked)
  const {filteredData,text,handleChange,handleBookmark}  = useSearch(allBookmarkedMovies);
  const bookmarkedDataMovies = data.filter(
    (bookmarked) => bookmarked.isBookmarked && bookmarked.category === "Movie"
  );
  const bookmarkedTvShows = data.filter(
    (bookmarked) => bookmarked.isBookmarked && bookmarked.category === "TV Series"
  );


  return (
    <>
     <Layout>
      <Search handleChange={handleChange} text={text} placeholderText="bookmarked shows" />
      {filteredData.length || text.length > 0 ? (
        <SearchPage data={filteredData} text={text} />
      ) : (
        <Box>
          <CustomHeading component={"h1"}>Bookmarked Movies</CustomHeading>
           <Lists listData={bookmarkedDataMovies} handleBookmark={handleBookmark}/>
          <CustomHeading component={"h1"}>Bookmarked TV Series</CustomHeading>
          <Lists listData={bookmarkedTvShows} handleBookmark={handleBookmark}/>
        </Box>
      )}
    </Layout>
    </>
  );
};

export default Bookmarked;
