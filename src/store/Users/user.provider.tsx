import { createContext, Dispatch, useReducer } from 'react';
import { ActionType, USER_INITIAL_STATE, userReducer } from './user.reducer';

export const UsersStateContext = createContext({ ...USER_INITIAL_STATE });
export const UsersDispatchContext = createContext<Dispatch<ActionType> | null>(null);

export const UserProvider = ({ children }: any) => {
	const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE);

	return (
		<UsersDispatchContext.Provider value={dispatch}>
			<UsersStateContext.Provider value={state}>
				{children}
			</UsersStateContext.Provider>
	 </UsersDispatchContext.Provider>
	);
};
