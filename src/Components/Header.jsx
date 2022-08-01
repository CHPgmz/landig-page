const Header = () => {
  return (
    <>
      <header id="header">
        <div id="logo">
          <img
            id="header-img"
            src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png"
            alt="No se encontro la imagen"
          />
        </div>
        <NavBar />
      </header>
    </>
  );
};

const NavBar = () => {
  return (
    <nav id="nav-bar">
      <ul id="nav-ul">
        <li className="nav-li">
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-li">
          <a href="#" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-li">
          <a href="#" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Header };
