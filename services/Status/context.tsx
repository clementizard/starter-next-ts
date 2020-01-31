import React, {
	FunctionComponent,
	createContext,
	useContext,
	useReducer,
} from 'react';

import statusReducer from './reducer';
import { getFromLocalOrDefault } from '../Tools';

const StatusStateContext = createContext({});
const StatusDispatchContext = createContext({});

const LOCAL_KEY_STATUS: string = process.env.LOCAL_KEY_STATUS || '';
const LOCAL_KEY_DEVICE: string = process.env.LOCAL_KEY_DEVICE || '';
const SESSION_KEY_USER: string = process.env.SESSION_KEY_USER || '';
const defaultState = {
	[LOCAL_KEY_DEVICE]: 'initial',
	[SESSION_KEY_USER]: 'initial',
};

export const StatusProvider: FunctionComponent<{ children: FunctionComponent }> = ({ children }) => {
	const [state, dispatch] = useReducer(statusReducer, getFromLocalOrDefault(defaultState, LOCAL_KEY_STATUS || 'MISSING'));

	return (
		<StatusStateContext.Provider value={state}>
			<StatusDispatchContext.Provider value={dispatch}>
				{children}
			</StatusDispatchContext.Provider>
		</StatusStateContext.Provider>
	)
};

export const useStatusState = (key?: string) => {
	const context = useContext(StatusStateContext);
	if (context === undefined) throw new Error('useStatusState must be used within a StatusProvider');
	// @ts-ignore
	if (Boolean(key)) return context[key];
	return context;
};
export const useStatusDispatch = () => {
	const context = useContext(StatusDispatchContext);
	if (context === undefined) throw new Error('useStatusDispatch must be used within a StatusProvider');
	return context;
};
