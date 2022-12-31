import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
// import { setItemsToLocalStorage } from '../../utils/helpers';
import './SideBar.scss';

export interface ILinkComp {
  activate?: boolean;
  dashboard?: boolean;
  settlements?: boolean;
  transaction?: boolean;
  disputes?: boolean;
  name?: string;
  link: string;
  Icon?: any;
  disabled?: boolean;
  onClick?: () => void;
  shouldNotBeActive?: boolean;
  closeDropDownAndSideBar?: () => void;
  className?: string;
}

const LinkComp: FunctionComponent<ILinkComp> = ({
  name,
  link,
  Icon,
  disabled,
  onClick,
  shouldNotBeActive,
  closeDropDownAndSideBar,
  className,
}) => {
  const handleClick = (e:any) => {
    closeDropDownAndSideBar?.();
    if (disabled) e.preventDefault();

    // setItemsToLocalStorage('nav-title', name);
  };
  return (
    <li>
      <NavLink
        onClick={onClick || handleClick}
        to={link}
        className={`nav-link-comp d-flex ${shouldNotBeActive ? 'inactive' : ''} ${disabled ? 'disabled-link' : ''} ${className}`}
      >
        <Icon />

        <p className="nav-p">{name}</p>
      </NavLink>
    </li>
  );
};

export default LinkComp;
