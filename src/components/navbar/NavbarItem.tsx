import { useNavbarContext } from "./context";

type Props = {
  children?: string;
  to: string;
};
export const NavbarItem = ({ children, to }: Props) => {
  const { toggleMenu } = useNavbarContext();
  return (
    <li className="menu-item" onClick={toggleMenu}>
      <a href={to} className="menu-link">
        {children}
      </a>
    </li>
  );
};
