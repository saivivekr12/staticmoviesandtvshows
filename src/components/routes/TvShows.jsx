import  { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import useSearch from "../../hooks/useSearch";
import CommonLayout from "../CommonLayout";
import Layout from "../layout/Layout";


const TvShows = () => {
  const { data } = useContext(MoviesContext);
  const {handleBookmark}  = useSearch(data);
  const categoryTvshowssData = data.filter((categoryTvSeries) => categoryTvSeries.category === "TV Series");
  return (
    <Layout>
   <CommonLayout data={categoryTvshowssData} placeholder="Tv series" heading="Tv Series" handleBookmark={handleBookmark}/>
   </Layout>
  );
};

export default TvShows;