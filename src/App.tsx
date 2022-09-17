import { Navbar } from "./components/navbar";
import { NavbarProvider } from "./components/navbar/context";

export const App = () => {
  return (
    <div>
      <NavbarProvider>
        <Navbar />
      </NavbarProvider>
    </div>
  );
};
