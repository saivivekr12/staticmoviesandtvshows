import React, { useContext, useEffect, useState } from "react";
import { CardProps } from "../components/cards/Card";
import { BackendData, MoviesContext } from "../context/MoviesContext";

const useSearch = (data: BackendData[]) => {

  const [text, setText] = useState("");
  const {
    data: contextData,
    setData,
    message,
    setPosition,
    setMessage,
    open,
    setOpen, position
  } = useContext(MoviesContext);

  const [filteredData, setFilteredData] = useState<BackendData[]>(
    [] as BackendData[]
  );
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    const newData: any = data.filter((d) => {
      if (
        d.title.toLowerCase().includes(event.target.value.toLowerCase()) &&
        event.target.value !== ""
      ) {
        return d;
      }
    });
    setFilteredData(newData);
  };
  const handleBookmark = (title: string,scrolly:number) => {
      setPosition(scrolly)
    const updatedBookmarkedData = contextData.map((context) => {
      if (context.title === title) {
        if (context.isBookmarked) {
          setMessage("Bookmark removed");
          setOpen(true);
        } else {
          setMessage("Bookmark added");
          setOpen(true);
        }
        return {
          ...context,
          isBookmarked: !context.isBookmarked,
        };
      } else {
        return context;
      }
    });
    setData(updatedBookmarkedData);
  };

  return {
    text,
    filteredData,
    handleChange,
    handleBookmark,
    handleClose,
    open,
  };
};

export default useSearch;
