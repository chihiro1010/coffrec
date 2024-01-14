import siteLogoImg from "../assets/COFFREC.png";

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <img className="inline-flex mt-5" src={siteLogoImg} alt="site-logo" />
    </header>
  );
};

export default Header;
