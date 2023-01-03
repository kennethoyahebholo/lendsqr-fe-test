import CardLabelAndTitle from '../../../components/CardLabelAndTitle';
import SummaryDetailsCover from '../../../components/SummaryDetailsCover';
import '../userComp.scss';

export interface IUserProfile{
  firstName: string,
  lastName: string,
  phoneNumber: string,
  avatar: string | null,
  gender: string,
  bvn: string | number,
  address: string,
  currency: string | number,
}
const UserProfileComp =  ({ ...profile }:IUserProfile ) => {

  return (
    <div>
      <SummaryDetailsCover paddingBottom="0px" paddingTop="0px">
       <div>
        <div className="summary-cover">
         <div className="summary-title-and-button-div">
          <div className="summary-title">
            Personal Information
          </div>
        </div>
        <div>
          <CardLabelAndTitle
            content={profile}
            attribute={['firstName', 'phoneNumber', 'email', 'bvn', 'gender']}
            label={
              {
                firstName: 'FULL NAME',
                phoneNumber: 'PHONE NUMBER',
                email: 'EMAIL ADDRESS',
                bvn: 'BVN',
                gender: 'GENDER',
              }
            }
          />
        </div>

        <div>
          <CardLabelAndTitle
            content={profile}
            attribute={['maritalStatus', 'children', 'typeOfResidence', '', '']}
            label={
              {
                maritalStatus: 'MARITAL STATUS',
                children: 'CHILDREN',
                typeOfResidence: 'TYPE OF RESIDENCE',
              }
            }
          />
        </div>
        </div>     
        
       </div>        
      </SummaryDetailsCover>

    </div>
  );
};
export default UserProfileComp;
