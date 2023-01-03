import CardLabelAndTitle from '../../../components/CardLabelAndTitle';
import SummaryDetailsCover from '../../../components/SummaryDetailsCover';
import '../userComp.scss';

interface IUserGuarantor{
  level?: any,
  employmentStatus?: any,
  duration?: any,
  officeEmail?: any,
  monthlyIncome?: any,
  loanRepayment?: any

}
const UserGuarantorComp =  ({ ...guarantor }:IUserGuarantor ) => {

  return (
    <div>
      <SummaryDetailsCover paddingBottom="0px" paddingTop="13px">
       <div>
        <div className="summary-cover">
         <div className="summary-title-and-button-div">
          <div className="summary-title">
            Guarantor
          </div>
        </div>
        <div>
          <CardLabelAndTitle
            content={guarantor}
            attribute={['firstName', 'phoneNumber', 'address', 'relationship', '']}
            label={
              {
                firstName: 'FULL NAME',
                phoneNumber: 'PHONE NUMBER',
                address: 'ADDRESS',
                relationship: 'RELATIONSHIP',
              }
            }
          />
        </div>

        <div>
          <CardLabelAndTitle
            content={guarantor}
            attribute={['firstName', 'phoneNumber', 'address', 'relationship', '']}
            label={
              {
                firstName: 'FULL NAME',
                phoneNumber: 'PHONE NUMBER',
                address: 'ADDRESS',
                relationship: 'RELATIONSHIP',
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
export default UserGuarantorComp;
