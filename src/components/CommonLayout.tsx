import { BackendData } from "../context/MoviesContext";
import useSearch from "../hooks/useSearch";
import SearchPage from "../pages/SearchPage";
import Lists from "./Lists";
import { CustomHeading } from "./routes/Home";
import Search from "./Search";

type CommonProps = {
  data: BackendData[];
  heading: string;
  placeholder: string;
  handleBookmark: (title: string,scrolly:number) => void;
  text?:string;
  filteredData?:BackendData[]
};
const CommonLayout = (props: CommonProps) => {
  const { text, handleChange,filteredData } = useSearch(props.data);
  return (
    <>
      {
        <Search
          text={text}
          handleChange={handleChange}
          placeholderText={props.placeholder}
        />
      }
      <SearchCommonLayout {...props} text={text} filteredData={filteredData} />
    </>
  );
};

export default CommonLayout;

export const SearchCommonLayout = ({
  data,
  heading,
  handleBookmark,
  text="",
  filteredData=[]

}: CommonProps) => {
  return (
    <>
      <CustomHeading component="h1">{heading}</CustomHeading>
      {filteredData.length || text.length > 0 ? (
        <SearchPage data={filteredData} text={text} />
      ) : (
        <Lists listData={data} handleBookmark={handleBookmark} />
      )}
    </>
  );
}
