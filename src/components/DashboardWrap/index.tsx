import { FunctionComponent, useState } from 'react';
import "./DashboardWrap.scss"
import SideBar from '../Sidebar'
import TopNav from "../TopNav"

export interface IDashboardWrap {
  label?: string;
  children?: any;
  disabled?: boolean;
  className?: string;
  ActivateAcctCustomComp?: any;
  CustomTextComp?: any;
  CustomLabelElement?: any;
}

const DashboardWrap: FunctionComponent<IDashboardWrap> = ({
  children,
  label,
  disabled,
  className,
  ActivateAcctCustomComp,
  CustomTextComp,
  CustomLabelElement,
}) => {
 const [showSideMenu, setShowSideBar] = useState(false);
 const [showTopDropdown, setShowTopDropdown] = useState(false);

 const handleCloseSidebar = () => {
    if (showSideMenu) {
      setShowSideBar(false);
    } else {
      setShowSideBar(true);
    }
  };

  const closeDropDownAndSideBar = () => {
    setShowTopDropdown(false);
    setShowSideBar(false);
  };

  const itemList = [{
    title: 'Profile',
    // icon: <NewProfileIcon />,
    color: '#475467',
  },
  {
    title: 'Log Out',
    // icon: <NewLogoutIcon />,
    color: '#B42318',
  }];

  const handleDropDown = (title:any) => {
    switch (title) {
    case 'Profile':
      // push('/settings/profile');
      break;
    // case 'Preferences':
    //   push('/settings/preference');
    //   break;
    case 'Log Out':
      // clearUser();
      // push('/');
      break;
    default:
      break;
    }
    setShowTopDropdown(false);
  };

  const dashboardCover = (
   <div className="row m-0 merchant-dashboard-cover app-max-width">
      {
        showSideMenu && (
        <div className="mobile-sidebar-cover">
          <div className="mobile-sidebar-cover-close-icon">
            <div className="rounded-menu-icon-div" onClick={handleCloseSidebar}>
              {/* <CloseIcon color="#000000" width="8px" height="8px" /> */}
            </div>
          </div>
          {/* <SideBar activate disabled={disabled} closeDropDownAndSideBar={closeDropDownAndSideBar} /> */}
        </div>
        )
      }
      <TopNav
          // dropdownObj={{
          //   showTopDropdown,
          //   setShowTopDropdown,
          //   setShowSideBar,
          //   showSideMenu,
          // }}
        />
      <div className="col-lg-3 merchant-dashboard-cover-sidebar m-0 p-0">
        <div className="desktop-sidebar-cover">
          <SideBar 
          // activate
           // disabled={disabled}
            // closeDropDownAndSideBar={closeDropDownAndSideBar}
             />
        </div>
      </div>
      <div className="col-xl col-lg-9 col-12 merchant-dashboard-cover-container m-0 p-0">
        <div className="merchant-dashboard-cover-container-content">
          <div className="">
            {/* {!!label && (
            <ActivateAccount
              label={label}
              CustomComp={ActivateAcctCustomComp}
              CustomTextComp={CustomTextComp}
              CustomLabelElement={CustomLabelElement}
            />
            )} */}
            <div className={className || ''}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>{ dashboardCover }</div>
  )
}

export default DashboardWrap