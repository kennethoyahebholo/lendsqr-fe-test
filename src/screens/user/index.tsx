import {
  FunctionComponent
} from 'react';
import DashboardWrap from '../../components/DashboardWrap';
import DashboardHeader from '../../components/DashboardHeader'

const Dashboard: FunctionComponent = () => {
  return (
    <div className="overview-contain">
      <DashboardWrap className="overview">
        <DashboardHeader
          // title={`Hello, ${profile?.firstName}`}
          // subtitle="Here’s an overview of the Payfi admin dashboard"
          // filterObj={filterObj}
        />
        <div className="overview-flash-cards">
          {/* {Object.keys(overviewData)?.map((overviewKey, id) => ( */}
            {/* <DataComp
              key={`${overviewData[overviewKey]?.name}-${id}`}
              recordName={overviewKey}
              {...overviewData[overviewKey]}
              {...configOverviewData[overviewKey]}
              dateInDays={dateInDays}
              setOverviewData={setOverviewData}
              globalLoading={overviewLoading}
              from={from}
              to={to}
            /> */}
          {/* ))} */}
        </div>
      </DashboardWrap>
    </div>
  )
}

export default Dashboard