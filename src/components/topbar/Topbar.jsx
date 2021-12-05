import { Person, Mail } from "@material-ui/icons";
import "./topbar.scss";

const Topbar = ({ showMenu, setShowMenu }) => {
  return (
    <div className={"topbar " + (showMenu && "active")}>
      <div className='wrapper'>
        <div className='left'>
          <a href='#intro' className='logo'>
            katitos.
          </a>
          <div className='itemContainer'>
            <Person className='icon' />
            <span>+1 132 45 67</span>
          </div>
          <div className='itemContainer'>
            <Mail className='icon' />
            <span>dev@katitos.art</span>
          </div>
        </div>
        <div className='right'>
          <div className='hamburger' onClick={() => setShowMenu(!showMenu)}>
            <span className='line1'></span>
            <span className='line2'></span>
            <span className='line3'></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
