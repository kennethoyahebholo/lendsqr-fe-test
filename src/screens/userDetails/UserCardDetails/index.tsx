import './styles.scss'
import { FunctionComponent } from 'react';

import UserDetailsNavigation from './UserDetailsNavigation'

import { ReactComponent as AvartaIcon } from "../../../assets/svgs/avartaIcon.svg";
import { ReactComponent as StarIconFill } from "../../../assets/svgs/starIconFill.svg";
import { ReactComponent as StarIcon } from "../../../assets/svgs/starIcon.svg";
import { IUser } from '../../../types/_model';
import { IUserProfile } from "../UserProfileComp"

export interface ICardDetails {
  user?: IUser,
  profile?: IUserProfile
}

const Index: FunctionComponent<ICardDetails > = ({ user, profile}) => {

  return (
    <div className="user-cover">
     <div className="user-cover-wrapper">
      <div className="user-cover-first-section">
       <div className="user-cover-first-section-image">
        <AvartaIcon />
       </div>
       <div className='user-cover-first-section-details'>
       <h4>{profile?.firstName} {profile?.lastName}</h4>
       <small>LSQFf587g90</small>
       </div>
      </div>

      <div className="user-cover-second-section">
       <div className="user-cover-second-section-details">
       <h4>User's Tier</h4>
       <div className="user-cover-second-section-star-icon">
        <StarIconFill />
        <StarIcon />
        <StarIcon />
       </div>
       </div>
      </div>


      <div className="user-cover-third-section">
       <div className='user-cover-third-section-details'>
       <h4>₦200,000.00</h4>
       <small>{`${user?.accountNumber}/Providus Bank`}</small>
       </div>
      </div>
     </div>

     <div className='user-details-navigation'>
     <UserDetailsNavigation />
     </div>

    </div>
  )
}

export default Index