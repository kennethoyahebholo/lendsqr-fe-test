import {useEffect} from 'react'

import DashboardWrap from '../../components/DashboardWrap'
import UserDashboardHeader from './UserDashboardHeader'
import { useLocation } from 'react-router-dom';
import UserInfoComp from './UserInfoComp';
import UserSocialsComp from './UserSocialsComp';
import UserGuarantorComp from './UserGuarantorComp';
import UserProfileComp from './UserProfileComp';
import UserCardDetails from './UserCardDetails'

type Props = {}

const Index = (props: Props) => {
 const location = useLocation();

 const guarantor = location.state?.guarantor
 const education = location.state?.education
 const profile = location.state?.profile
 const socials = location.state?.socials
 const user = location.state

 useEffect(()=>{
  console.log(location)
 },[])

 return (
   <DashboardWrap>
       <div className="merchant">
         <UserDashboardHeader
         title="User Details"
         />
        <UserCardDetails user={user} profile={profile} />
        <div className="summary-details-cover">
         <UserProfileComp { ...profile }  />
         <UserInfoComp { ...education }  />
         <UserSocialsComp { ...socials } />
         <UserGuarantorComp { ...guarantor } />
        </div>
       </div>        
     </DashboardWrap>
 )
}

export default Index