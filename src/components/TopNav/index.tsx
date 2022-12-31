import { FunctionComponent } from 'react';
import "./TopNav.scss"
import { DashboardLogo, Avatar, DropIcon, SearchIcon, notIcon } from '../../assets/index';

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
      <img src={DashboardLogo} alt="" />
     </div>
     <div className="navbar-cover-search">
      <input
         className="navbar-cover-search-input"
         placeholder="search for anything"
         />
         <div className="navbar-cover-search-absolute">
          <img src={SearchIcon} alt="" />
         </div>
      </div>
      <div className="navbar-cover-details d-flex">
       <div className='navbar-cover-details-lists'>
        {/* make a link */}
        <small>Docs</small>
       </div>
       <div className="navbar-cover-details-icon">
          <img src={notIcon} alt="" />
        </div>
       <div className="navbar-cover-details-avatar"> 
        <img src={Avatar} alt="" />        
       </div> 
       <div className="navbar-cover-details-names">
        <h6>Adedeji <img src={DropIcon} alt="" /></h6>        
       </div>     
      </div>
    </div>
  )
}

export default TopNav