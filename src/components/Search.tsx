import { styled } from "@mui/material/styles";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

type SearchProps = {
  text:string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholderText:string
};
 const Search = ({  handleChange,text,placeholderText }: SearchProps) => {
  const SearchContainer = styled("div")(({ theme }: any) => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "32px",
    [theme.breakpoints.down("md")]: {
     marginTop:"26px"
    },
    flex:1,
    input: {
      flex: 1,
      border: 0,
      outline: 0,
      fontSize: "24px",
      fontWeight: 300,
      color: "#fff",
      padding: "12px",
      backgroundColor: "#10141e",
      caretColor: "#fc4747",
      fontFamily: 'Outfit',
      "&:hover": {
        borderBottom: "1px solid #5a698f",
      },
      "&::placeholder": {
        opacity: 0.5,
        fontSize: "24px",
        fontWeight: 300,
        color: "#fff",
        marginLeft: "24px",
      },

      "& :focus":{
        borderBottom: "1px solid #5a698f",
      }
    },
  }));
  return (
    <SearchContainer>
      <SearchIcon style={{ marginRight: "24px" }} />
      <input
        type="text"
        value={text}
        placeholder={`Search for ${placeholderText}`}
       onChange={handleChange}
       autoFocus={true}
      />
    </SearchContainer>
  );
};

export default Search;
