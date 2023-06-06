import React, { useContext, useState } from "react";
import { PropsWithChildren } from "react";

type User = Readonly<{
  email: string;
  username: string;
}>;

type UserContextValue = {
  user: User | null,
  login: (user: User) => void;
  logout: () => void;
};

const UserContext = React.createContext<UserContextValue>({} as unknown as UserContextValue);

export function UserContextProvider({children}: PropsWithChildren) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const userContextValue: UserContextValue = {
    user: currentUser,
    login: (user: User) => setCurrentUser(user),
    logout: () => setCurrentUser(null)
  };

  return <UserContext.Provider value={userContextValue}>
    {children}
  </UserContext.Provider>
}

export const useUser = () => useContext(UserContext);