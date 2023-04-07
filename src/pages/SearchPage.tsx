import { Box, Grid } from "@mui/material";
import Card, { CardProps } from "../components/cards/Card";
import { BackendData } from "../context/MoviesContext";

type SearchPageProps = {
  data: BackendData[];
  text: string;
};
const SearchPage = ({ data, text }: SearchPageProps) => {
  return (
    <>
      <Box
        fontSize="32px"
        component={"div"}
        fontWeight={300}
        color="#fff"
        marginBottom={"32px"}
      >
        Found {data.length} results for {text}
      </Box>
      <Grid container spacing={2}>
        {data.map((d: any) => (
          <Grid
            item
            lg={3}
            md={4}
            sm={6}
            xs={12}
            key={d.title}
          >
            <Card {...d} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SearchPage;
