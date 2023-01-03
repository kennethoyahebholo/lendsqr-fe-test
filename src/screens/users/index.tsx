import {
  FunctionComponent, useState, useContext, useEffect
} from 'react';
import DashboardWrap from '../../components/DashboardWrap';
import DashboardHeader from '../../components/DashboardHeader'
import Card from './Card'

import { ReactComponent as UsersIcon } from "../../assets/svgs/aUsersIcon.svg";
import { ReactComponent as SavingsIcon } from "../../assets/svgs/SavingsIcon.svg";
import { ReactComponent as usersIcn } from "../../assets/svgs/usersIcon.svg";
import { ReactComponent as loanUserIcon } from "../../assets/svgs/loanUserIcon.svg";

import './user.scss'
import Table from '../../components/Table/Table';

import {
	UsersDispatchContext,
	UsersStateContext,
} from '../../store/Users/user.provider';
import { ActionType, UserType } from '../../store/Users/user.reducer';
import { IPageQuery } from '../../services/users.services';
import {
	listUsersAction,
	userLoadingAction,
} from '../../store/Users/users.actions';
import { IUser } from '../../types/_model';
import Pagination from '../../components/Pagination';

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

const formatUsers = (users: any) => {
	if (users.length <= 0) return [];
	return users.map((user: IUser) => {
		return {
			organization: user.orgName,
      username: user.userName,
			email: user.email,
			phoneNumber: user.profile.phoneNumber,
      dateJoined: user.createdAt,
			status: user.id,
      id: user.id,
      guarantor: user.guarantor,
      profile: user.profile,
      education: user.education,
      socials: user.socials,
      accountNumber: user.accountNumber,
		};
	});
};

const Users = () => {

  const { loading, meta } = useContext(UsersStateContext);
  
  const usersDetails  = JSON.parse(localStorage.getItem("users") || "false")
  
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

  useEffect(() => {
		dispatchUsers();
	}, []);

  return (
      <DashboardWrap>
        <div className="merchant">
          <DashboardHeader
          title="User"
          />
        <div className="card-covers">
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
        <div className="table-details-cover">
            <Table
              dispatchAction={dispatchUsers}
              tableData={formatUsers(usersDetails)}
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
            {meta && <Pagination {...meta} dispatchAction={dispatchUsers} />}
          </div>
        </div>        
      </DashboardWrap>
  )
}

export default Users