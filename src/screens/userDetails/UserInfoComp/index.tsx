import CardLabelAndTitle from '../../../components/CardLabelAndTitle';
import SummaryDetailsCover from '../../../components/SummaryDetailsCover';
import '../userComp.scss';

interface IUserSocials{
  facebook?: any,
  twitter?: any,
  instagram?: any
}

interface IUserEducation{
  level?: any,
  employmentStatus?: any,
  duration?: any,
  officeEmail?: any,
  monthlyIncome?: any,
  loanRepayment?: any

}
const UserInfoComp = ({ ...education }:IUserEducation, { ...socials }:IUserSocials) => {

  return (
    <div>
      <SummaryDetailsCover paddingBottom="0px" paddingTop="13px">
       <div>
        <div className="summary-cover">
         <div className="summary-title-and-button-div">
          <div className="summary-title">
            Education and Employment
          </div>
        </div>
        <div>
          <CardLabelAndTitle
            content={education}
            attribute={['level', 'employmentStatus', 'duration', '', '']}
            label={
              {
                level: 'LEVEL OF EDUCATION',
                employmentStatus: 'EMPLOYMENT STATUS',
                sector: 'SECTOR OF EMPLOYMENT',
                duration: 'DURATION OF EMPLOYMENT',
              }
            }
          />
          <CardLabelAndTitle
            content={education}
            attribute={['officeEmail', 'monthlyIncome', 'loanRepayment', '', '']}
            label={
              {
                officeEmail: 'OFFICE EMAIL',
                monthlyIncome: 'MONTHLY INCOME',
                loanRepayment: 'LOAN REPAYMENT',
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
export default UserInfoComp;
