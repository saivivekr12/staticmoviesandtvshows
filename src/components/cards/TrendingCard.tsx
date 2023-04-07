import styled from "@emotion/styled";
import { ReactComponent as CategoryTvIcon } from "../../assets/icon-category-tv.svg";
import { Box, CardProps } from "@mui/material";
import { ReactComponent as BookmarkIconFull } from "../../assets/icon-bookmark-full.svg";
import { ReactComponent as CategoryMovieIcon } from "../../assets/icon-category-movie.svg";

import { ReactComponent as BookmarkIcon } from "../../assets/icon-bookmark-empty.svg";

const CardContainer:any = styled("div")(({thumbnail}:any)=> ({
  position: "relative",
  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)),url(${thumbnail.trending.large}) `,
  backgroundSize: "cover",
    minHeight:"230px",
   borderRadius:"8px",
   marginBottom:"32px",
  "& .image-icon": {
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    opacity: 0.5,
    backgroundColor: "#10141e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "20px",
    right: "30px",
    cursor: "pointer",
  },
  "& .name":{
    fontSize: "24px",
    fontWeight: 500,
    color:"#fff",
  }
}));

const MovieInfo = styled("div")({
 position:"absolute",
 left:"24px",
 bottom:"24px",
 fontSize:"15px",
 fontWeight:"300",
 color: "#fff",
 display:"flex",
 flexDirection:"column",
 gap:"6px",
 "& .year":{
  opacity: 0.75
 },
 "& .circle":{
  width: "3px",
  height: "3px",
  marginRight: "6px",
  opacity: 0.5,
  backgroundColor:"#fff"
},
 "& .info-category":{
  display:"flex",
  alignItems:"center",
  "& .category-name":{
    marginLeft:"6px",
    opacity: 0.75,
  },
  },
  "& .rating":{
    display:"flex",
    alignItems:"center"
  },
  "& .rating-name":{
    opacity: 0.75,
  }
  
})
type Trending={
  small:string,
  large:string
}
type TrendingProps={
  title:string,
  thumbnail:{
    trending?:Trending,
    regular:{
      small:string,
      large:string,
      medium:string
    }
  }
  year:number;
  category:string;
  rating:string;
  isBookmarked:boolean,
  handleBookmark:(title:string,scrolly:number)=>void
}

const  TrendingCard = ({title,thumbnail,year,category,rating,isBookmarked,handleBookmark}:TrendingProps) => {
  return (
    <CardContainer thumbnail={thumbnail}>
      <div className="image-icon" onClick={()=>handleBookmark(title,window.scrollY)}>
      {isBookmarked?<BookmarkIconFull />:<BookmarkIcon/>}
      </div>
      <MovieInfo>
        <Box display={"flex"} alignItems="center" gap={"8px"}>
         <p className="year">{year}</p>
         <div className="info-category">
          <Box sx={{display:"flex",alignItems:"center"}}>
          <div className="circle"></div>
          <div className="icon">
            {category === "Movie" ? <CategoryMovieIcon /> : <CategoryTvIcon />}
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
    </CardContainer>
  );
};

export default  TrendingCard;
