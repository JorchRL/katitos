import "./menu.scss";

const Menu = ({ showMenu, setShowMenu }) => {
  return (
    <div className={"menu " + (showMenu && "active")}>
      <ul>
        <li onClick={() => setShowMenu(!showMenu)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={() => setShowMenu(!showMenu)}>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li onClick={() => setShowMenu(!showMenu)}>
          <a href='#works'>Works</a>
        </li>
        <li onClick={() => setShowMenu(!showMenu)}>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li onClick={() => setShowMenu(!showMenu)}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
