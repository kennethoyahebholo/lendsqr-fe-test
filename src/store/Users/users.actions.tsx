// import { ActionType } from '../../types/IAuth';
import * as UsersService from '../../services/users.services';
import { IPageQuery } from '../../services/users.services';

export const usersActions = {
	LIST_USERS: 'LIST_USERS',
	FIND_USER: 'FIND_USER',
 USERS_LOADING: 'USERS_LOADING',
};

export const listUsersAction = async (pageQuery?: IPageQuery) => {
	try {
		const users = await UsersService.listUsers(pageQuery);
		return {
			type: usersActions.LIST_USERS,
			payload: users,
		};
	} catch (error: any) {
		throw error;
	}
};

export const findUserAction = async (userId: string)=> {
	try {
		const users = await UsersService.findUser(userId);
		return {
			type: usersActions.FIND_USER,
			payload: { ...users.data },
		};
	} catch (error) {
		console.error(error);
		throw error;
	}
};
export const userLoadingAction = (payload: boolean) => {
	return {
		type: usersActions.USERS_LOADING,
		payload,
	};
};
