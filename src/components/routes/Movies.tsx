import { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import useSearch from "../../hooks/useSearch";
import CommonLayout from "../CommonLayout";
import Layout from "../layout/Layout";

const Movies = () => {
  const { data } = useContext(MoviesContext);
  const { handleBookmark } = useSearch(data);
  const categoryMoviesData = data.filter(
    (categoryMovie) => categoryMovie.category === "Movie"
  );
  return (
    <Layout>
      <CommonLayout
        data={categoryMoviesData}
        placeholder=" Movies"
        heading="Movies"
        handleBookmark={handleBookmark}
      />
    </Layout>
  );
};

export default Movies;
