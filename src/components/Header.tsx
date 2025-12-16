import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
}

const Header = ({ children, image }: Props) => {
  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
};

export default Header;
