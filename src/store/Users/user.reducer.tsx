import { IPageMeta, IUser } from '../../types/_model';
import { usersActions } from './users.actions';
import { setItemsToLocalStorage, getItemsToLocalStorage } from '../../utils/helpers'

export type ActionType = { type: string; payload?: any };

export type UserType = {
	users: IUser[];
	user?: IUser | null;
	meta?: IPageMeta;
	loading: boolean;
	error: boolean;
};

export const USER_INITIAL_STATE: UserType = {
	users: [],
	user: undefined,
	meta: undefined,
	loading: false,
	error: false,
};

export const userReducer = (state = USER_INITIAL_STATE, action: ActionType) => {
	switch (action.type) {
		case usersActions.LIST_USERS:
			setItemsToLocalStorage('users', action.payload)
			return {
				...state,
				users: action.payload,
				meta: action.payload.meta,
				loading: false,
				
			};
		case usersActions.FIND_USER:
			return {
				...state,
				user: { ...state.user, ...action.payload },
				loading: false,
			};
		case usersActions.USERS_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		default:
			throw new Error(`Unknown action type: ${action.type}`);
	}
};
