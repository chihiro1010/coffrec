import siteLogoImg from "../assets/COFFREC.png";

const Header: React.FC = () => {
  return (
    <header className="sticky bg-white top-0 z-10 h-16">
      <img
        src={siteLogoImg}
        alt="サイトロゴ"
        className="absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2"
      />
    </header>
  );
};

export default Header;
