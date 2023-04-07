import { Grid } from "@mui/material";
import { BackendData, Trending } from "../context/MoviesContext";
import Card, { CardProps } from "./cards/Card";
import TrendingCard from "./cards/TrendingCard";

export type ListData = {
  title: string;
  thumbnail: {
    trending: Trending;
    regular: {
      small: string;
      large: string;
      medium: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};
type Listprops = {
  listData: BackendData[];
  isTrending?: boolean;
  handleBookmark: (title:string,scrolly:number) => void;
};
const Lists = ({ listData, isTrending, handleBookmark }: Listprops) => {
  return (
    <Grid container spacing={2}>
      {listData.map((td) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={td.title} >
          {isTrending ? (
            <TrendingCard
              {...td}
              handleBookmark={handleBookmark}      
            />
          ) : (
            <Card {...td} handleBookmark={handleBookmark}  />
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default Lists;
