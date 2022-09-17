import { createContext, useContext, useState } from "react";

type NavbarContext = {
  showMenu: boolean;
  toggleMenu: () => void;
};

type NavbarProvider = {
  children: any;
};

export const NavbarContext = createContext<Partial<NavbarContext>>({});

export const NavbarProvider = ({ children }: NavbarProvider) => {
  const [showMenu, setshowMenu] = useState(false);

  const toggleMenu = () => {
    setshowMenu(!showMenu);
  };

  return (
    <NavbarContext.Provider value={{ showMenu, toggleMenu }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (context === undefined) {
    throw new Error("NavbarContext must be used within a GentlemanProvider");
  }
  return context;
};
