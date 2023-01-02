// import {
//   FunctionComponent,
// } from 'react';
// import {
//   BrowserRouter, Route, Routes,
// } from 'react-router-dom';
// import DashboardWrap from '../../components/DashboardWrap';
// import AllUsers from './AllUsers';

// import './user.scss';

// const Users: FunctionComponent = () => (
//   <DashboardWrap>
//     <div className="settlement-root-cover">
//       <Routes>
//       <Route element={<AllUsers />} path="/user/all/*" />
//       </Routes>
//     </div>
//   </DashboardWrap>
// );

// export default Users;

import {
  FunctionComponent, useState, useContext, useEffect
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
import Table from '../../components/Table/Table2';

import {
	UsersDispatchContext,
	UsersStateContext,
} from '../../store/Users/user.provider';
import { ActionType } from '../../store/Users/user.reducer';
import { IPageQuery } from '../../services/users.services';
import {
	listUsersAction,
	userLoadingAction,
} from '../../store/Users/users.actions';
import { IUser } from '../../types/_model';

interface IUserTableRecord{
  defaultUrl?:string;
  toggleStorageId?:any;
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

const formatUsers = (users: IUser[]) => {
	if (users.length <= 0) return [];
	return users.map((user: IUser) => {
		return {
			organization: user.orgName,
      username: user.userName,
			email: user.email,
			phoneNumber: user.phoneNumber,
      dateJoined: user.createdAt,
			status: user.id,
		};
	});
};

const Users: FunctionComponent<IUserTableRecord> = ({defaultUrl, toggleStorageId, hasNameAndImage}) => {
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

  const { loading, users, meta } = useContext(UsersStateContext);

	const dispatch = useContext(UsersDispatchContext) as React.Dispatch<ActionType>;

	const dispatchUsers = async (pageQuery?: IPageQuery) => {
		try {
			dispatch(userLoadingAction(true));
			dispatch(await listUsersAction(pageQuery));
		} catch (error: any) {
			console.log(error?.response?.message || error?.message || 'User Fatal error');
			dispatch(userLoadingAction(false));
		}
	};

  // useEffect(()=>{
  //   console.log(dispatch)
  // },[dispatch])

  useEffect(() => {
		dispatchUsers();
    console.log(`hi${users}`)
	}, []);

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
				dispatchAction={dispatchUsers}
				tableData={formatUsers(users)}
				enableButton={true}
				columns={[
					'organization',
					'username',
					'email',
					'phone number',
					'date joined',
					'status',
				]}
				loading={loading}
			></Table>
        ) : (
          <EmptyRecord
            height="calc(100vh - 240px)"
            main="There is currently no user information."
          />
        )}

      </div>
        </div>        
      </DashboardWrap>
  )
}

export default Users