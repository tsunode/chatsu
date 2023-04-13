import Image from "next/image";
import Logo from "../assets/Logo.svg";

const Header = () => {
  return (
    <header className="w-screen bg-dark-3 p-4">
      <Image src={Logo} alt="logo" />
    </header>
  );
};

export default Header;
