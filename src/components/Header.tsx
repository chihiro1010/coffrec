import siteLogoImg from "../assets/COFFREC.png";

const Header: React.FC = () => {
  return (
    <header className="text-center bg-white z-30">
      <img
        className="fixed left-1/2 ml-[-4rem] top-8"
        src={siteLogoImg}
        alt="site-logo"
      />
    </header>
  );
};

export default Header;
