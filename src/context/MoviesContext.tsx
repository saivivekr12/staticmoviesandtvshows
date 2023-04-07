import { createContext, useState } from "react";

import backendData from "../data";

export type Trending = {
  small: string;
  large: string;
};
export type BackendData = {
  title: string;
  thumbnail: {
    trending?: Trending;
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

type MoviesContextProviderProps = {
  children: React.ReactNode;
};
type MoviesContextType = {
  data: BackendData[] | [];
  setData: React.Dispatch<React.SetStateAction<BackendData[] | []>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>
  position:number
  setPosition:React.Dispatch<React.SetStateAction<number>>
  open:boolean,
  setOpen:React.Dispatch<React.SetStateAction<boolean>>
};

export const MoviesContext = createContext({} as MoviesContextType);

export const MoviesContextProvider = ({
  children,
}: MoviesContextProviderProps) => {
  const [data, setData] = useState<BackendData[] | []>(backendData);
  const [message, setMessage] = useState("");
  const[position,setPosition] = useState(0);
  const[open,setOpen]= useState(false);
  return (
    <MoviesContext.Provider value={{ data, setData, message, setMessage,position,setPosition,open,setOpen}}>
      {children}
    </MoviesContext.Provider>
  );
};
