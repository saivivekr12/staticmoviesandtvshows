import styled from "@emotion/styled";
import { ReactComponent as BookmarkIconFull } from "../../assets/icon-bookmark-full.svg";
import { ReactComponent as CategoryMovieIcon } from "../../assets/icon-category-movie.svg";
import { ReactComponent as CategoryTvIcon } from "../../assets/icon-category-tv.svg";
import { Box } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const CardContainer: any = styled("div")((props: any) => {
  return {
    position: "relative",
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)),url(${props.bgImage.regular.large}) `,
    minHeight: "174px",
    maxWidth: "100%",
    backgroundSize: "cover",
    borderRadius: "8px",
    marginBottom: "8px",
    "& .image-icon": {
      borderRadius: "50%",
      width: "32px",
      height: "32px",
      opacity: 0.5,
      backgroundColor: "#10141e",
      position: "absolute",
      top: "20px",
      right: "30px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      svg: {
        path: {
          fill: "#fff;",
        },
      },
    },
    "& .name": {
      fontSize: "24px",
      fontWeight: 500,
      color: "#fff",
    },
  };
});

const MovieInfo = styled("div")({
  fontSize: "13px",
  fontWeight: "300",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  "& .year": {
    opacity: 0.75,
  },
  "& .circle": {
    width: "3px",
    height: "3px",
    marginRight: "6px",
    opacity: 0.5,
    backgroundColor: "#fff",
  },
  "& .info-category": {
    display: "flex",
    alignItems: "center",
    "& .category-name": {
      marginLeft: "6px",
      opacity: 0.75,
    },
  },
  "& .rating": {
    display: "flex",
    alignItems: "center",
  },
  "& .rating-name": {
    opacity: 0.75,
  },
  "& .name": {
    fontSize: "18px",
    fontWeight: 500,
    color: "#fff",
  },
});
type Thumbnail = {
  trending?:{
    small:string,
    large:string
  },
  regular: {
    small: string;
    large: string;
    medium: string;
  };
};
export type CardProps = {
  title: string;
  thumbnail?: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isTrending: boolean;
  isBookmarked: boolean;
  handleBookmark: (title:string,scrolly:number) => void;
};

const Card = ({
  title,
  thumbnail,
  year,
  category,
  rating,
  isBookmarked,
  handleBookmark

}: CardProps) => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      bgcolor="#10141e"
      marginBottom={"32px"}
    >
      <CardContainer bgImage={thumbnail} >
        <div className="image-icon" title="bookmarked" onClick={() => handleBookmark(title,window.scrollY)}>
          {isBookmarked ? <BookmarkIconFull /> : <BookmarkBorderIcon />}
        </div>
      </CardContainer>
      <MovieInfo>
        <Box display={"flex"} alignItems="center" gap={"8px"}>
          <p className="year">{year}</p>
          <div className="info-category">
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <div className="circle"></div>
              <div className="icon">
                {category === "Movie" ? (
                  <CategoryMovieIcon />
                ) : (
                  <CategoryTvIcon />
                )}
              </div>
              <div className="category-name">
                {category === "Movie" ? "Movie" : "Tv series"}
              </div>
            </Box>
          </div>
          <div className="rating">
            <div className="circle"></div>
            <p className="rating-name">{rating}</p>
          </div>
        </Box>
        <div className="name">{title}</div>
      </MovieInfo>
    </Box>
  );
};

export default Card
