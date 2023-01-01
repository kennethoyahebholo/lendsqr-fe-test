import {
  FunctionComponent, useState
} from 'react';
import DashboardWrap from '../../components/DashboardWrap';
import DashboardHeader from '../../components/DashboardHeader'
import Card from './Card'
import EmptyRecord from '../../components/EmptyRecord';
import useTableColumn from '../../customHooks/useTableColumn';

import { ReactComponent as UsersIcon } from "../../assets/svgs/aUsersIcon.svg";
import { ReactComponent as SavingsIcon } from "../../assets/svgs/SavingsIcon.svg";
import { ReactComponent as usersIcn } from "../../assets/svgs/usersIcon.svg";
import { ReactComponent as loanUserIcon } from "../../assets/svgs/loanUserIcon.svg";

import './user.scss'
import Table from '../../components/Table';

interface IUserTableRecord{
  defaultUrl?:string;
  toggleStorageId?:any;
  tabStatus?:string;
  hasNameAndImage?:boolean;
}

const details =  [
      {
        icon: usersIcn,
        status: 'USERS',
        number: '2,453',
      },
      {
        icon: UsersIcon,
        status: 'ACTIVE USERS',
        number: '2,453',
      },
      {
        icon: loanUserIcon,
        status: 'USERS WITH LOANS',
        number: '12,453',
      },
      {
        icon: SavingsIcon,
        status: 'USERS WITH SAVINGS',
        number: '102,453',
      },
    ]

const UserTableRecords: FunctionComponent<IUserTableRecord> = ({defaultUrl,  hasNameAndImage, tabStatus, toggleStorageId}) => {
  const allColumns = [
    'ORGANIZATION',
    'USERNAME',
    'EMAIL',
    'PHONE NUMBER',
    'DATE JOINED',
    'STATUS'
  ];
  const columnLabelFormat = {
    settlementReference: 'Reference',
    name: 'Merchant',
    totalAmount: 'Sales',
    type: 'Fee Type',
    totalInterest: 'Commission',
    totalSettled: 'Settled Amount',
    status: 'Status',
    settledOn: 'Date Settled',
    image__name: 'Merchant',
  };


  const { getColumns, applyChanges, selectedColumns } = useTableColumn(allColumns, toggleStorageId);
  const [userRec, setuserRec] = useState(null);

  return (
      <DashboardWrap>
        <div className="settlement-merchant">
          <DashboardHeader
          title="User"
          />
        <div className="settlement-card-covers">
          {details?.map?.(({
            icon, status, number
          }, id) => (

            <Card
              Icon={icon}
              key={id}
              number={number}
              status={status}
            />
          ))}
        </div>
        <div className="settlement-table-details-cover">
        {!userRec? (
          <Table
            // refreshing={getUsersLoading}
            // page={page}
            // setPage={setPage}
            // pageSize={limit}
            minHeight="calc(100vh - 280px)"
            // count={settlementRec?.count}
            // contents={cleanUpAdminAllSettlements(settlementRec?.settlements)}
            reference="id"
            hideDominantImage
            clickable
            hasNameAndImage={hasNameAndImage}
            // handleClick={(data) => routeToSettlementDetails(data)}
            allowKeyArr={getColumns(true)}
            mobileAllowKeyArr={
              [
                'status',
                ['name', 'settlementReference'],
                ['type', 'totalAmount'],
              ]
            }
            formatLabels={columnLabelFormat}
          />
        ) : (
          <EmptyRecord
            height="calc(100vh - 240px)"
            // title={getUsersLoading ? 'Fetching usesrs...' : 'No User found'}
            main="There is currently no user information."
            // footer="Receive Payments"
            // loading={getUserLoading}
            // Icon={EmptySettlementIcon}
          />
        )}

      </div>
        </div>        
      </DashboardWrap>
  )
}

export default UserTableRecords