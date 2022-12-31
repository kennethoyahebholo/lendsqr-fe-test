import { FunctionComponent } from 'react';
import "./TopNav.scss"

import { ReactComponent as DashboardLogo } from "../../assets/svgs/navlogo.svg";
import { ReactComponent as Avatar } from "../../assets/svgs/avatarsvg.svg";
import { ReactComponent as DropIcon } from "../../assets/svgs/dropIcon.svg";
import { ReactComponent as SearchIcon } from "../../assets/svgs/searhIcon.svg";
import { ReactComponent as NotIcon } from "../../assets/svgs/npIcon.svg";

import MobileMenuIcon from '../../assets/svgs/MobileMenuIcon';

export interface ITopNav {
  label?: string;
  dropdownObj?: any;
}




const TopNav: FunctionComponent<ITopNav> = ({ dropdownObj }) => {

  const handleToggleMenu = () => {
    dropdownObj?.setShowSideBar(true);
  };

  return (
    <div className="navbar-cover d-flex items-center">
      <div className="navbar-cover-menu">
        <span onClick={handleToggleMenu}>
          <MobileMenuIcon />
        </span>

      </div>
      <div className="navbar-cover-logo">
        <DashboardLogo />
      </div>
      <div className="navbar-cover-search">
        <input
          className="navbar-cover-search-input"
          placeholder="search for anything"
          />
          <div className="navbar-cover-search-absolute">
            <SearchIcon />
          </div>
        </div>
      <div className="navbar-cover-details d-flex">
        <div className='navbar-cover-details-lists'>
          {/* make a link */}
          <small>Docs</small>
        </div>
        <div className="navbar-cover-details-icon">
            <NotIcon />
          </div>
        <div className="navbar-cover-details-avatar"> 
          <Avatar />        
        </div> 
        <div className="navbar-cover-details-names">
          <h6>Adedeji <DropIcon /></h6>        
        </div>     
      </div>
    </div>
  )
}

export default TopNav