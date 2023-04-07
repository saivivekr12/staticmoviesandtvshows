import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

type UserContextProviderProps = {
  children: React.ReactNode;
};
type UserContextType = {
  token: {};
};

export const UserContext = createContext<null | UserContextType>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: any) => {
      setToken(currentUser.accessToken);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <UserContext.Provider value={{ token }}>{children}</UserContext.Provider>
  );
};