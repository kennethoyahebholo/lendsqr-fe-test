import CardLabelAndTitle from '../../../components/CardLabelAndTitle';
import SummaryDetailsCover from '../../../components/SummaryDetailsCover';
import '../userComp.scss';

interface IUserSocials{
  facebook?: any,
  twitter?: any,
  instagram?: any
}

const UserSocialsComp = ( { ...socials }:IUserSocials ) => {

  return (
    <div>
      <SummaryDetailsCover paddingBottom="0px" paddingTop="13px">
       <div>

        <div className="summary-cover">
         <div className="summary-title-and-button-div">
          <div className="summary-title">
            Socials
          </div>
        </div>
         <div>
          <CardLabelAndTitle
            content={socials}
            attribute={['twitter', 'facebook', 'instagram', '', '']}
            label={
              {
                twitter: 'TWITTER',
                facebook: 'FACEBOOK',
                instagram: 'INSTAGRAM',
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
export default UserSocialsComp;
