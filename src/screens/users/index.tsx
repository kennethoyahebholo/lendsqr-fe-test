import {
  FunctionComponent, useState, useContext, useEffect
} from 'react';
import DashboardWrap from '../../components/DashboardWrap';
import DashboardHeader from '../../components/DashboardHeader'
import Card from './Card'

import ReactPaginate from 'react-paginate';

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
import { ReactComponent as PrevIcon } from "../../assets/svgs/prev-btn.svg";
import { ReactComponent as NextIcon } from "../../assets/svgs/next-btn.svg";
import { ReactComponent as DropIcon } from "../../assets/svgs/dropIcontPag.svg";

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
  
  // const usersDetails = JSON.parse(localStorage.getItem("users") || "false")
  const [usersDetails, setUsersDetails] = useState([])
  const [isData, setIsData] = useState(false)

  const [currentItems, setCurrentItems] = useState<IUser[]>([]);
  const itemsPerPage = 9;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  
	const dispatch = useContext(UsersDispatchContext) as React.Dispatch<ActionType>;

	const dispatchUsers = async (pageQuery?: IPageQuery) => {
		try {
			dispatch(userLoadingAction(true));
			dispatch(await listUsersAction(pageQuery));
      setIsData(true)
      await setUsersDetails(JSON.parse(localStorage.getItem("users") || "false"))
		} catch (error: any) {
			console.log(error?.response?.message || error?.message || 'User Fatal error');
			dispatch(userLoadingAction(false));
		}
	};

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % usersDetails.length;
    setItemOffset(newOffset)
  }

  useEffect(() => {
		dispatchUsers();
	}, [isData]);  

  useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(usersDetails? usersDetails.slice(itemOffset, endOffset) : []);
    setPageCount(Math.ceil(usersDetails.length / itemsPerPage))
	}, [itemOffset, itemsPerPage, usersDetails]);

  

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
              tableData={formatUsers(currentItems)}
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
            <div className="pagination_con">
              <div className='left_section'>
                <h5>Showing<button>100<DropIcon /></button>out of 100</h5>
              </div>
            <ReactPaginate 
              breakLabel="..."
              nextLabel={<NextIcon />}
              onPageChange={handlePageClick}
              pageRangeDisplayed={2}
              pageCount={pageCount}
              previousLabel={<PrevIcon />}
              containerClassName='pagination'
              pageLinkClassName='page-num'
              previousLinkClassName='page-num'
              nextLinkClassName='page-num'
              activeLinkClassName='active'
            />
            </div>
          </div>
        </div>        
      </DashboardWrap>
  )
}

export default Users