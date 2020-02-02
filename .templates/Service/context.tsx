import React, {
	FunctionComponent,
	useReducer,
	createContext,
	useContext,
} from 'react';

import defaultState from './default.json';
import namedReducer from './reducer';

const NamedStateContext = createContext({});
const NamedDispatchContext = createContext({});

export const NamedProvider: FunctionComponent<{ children: FunctionComponent }> = ({ children }) => {
	const [state, dispatch] = useReducer(namedReducer, defaultState);

	return (
		<NamedStateContext.Provider value={state}>
			<NamedDispatchContext.Provider value={dispatch}>
				{children}
			</NamedDispatchContext.Provider>
		</NamedStateContext.Provider>
	)
};

type context = () => any;

export const useNamedState: context = () => {
	const context = useContext(NamedStateContext);
	if (context === undefined) throw new Error('useNamedState must be used within a NamedProvider');
	return context;
};
export const useNamedDispatch: context = () => {
	const context = useContext(NamedDispatchContext);
	if (context === undefined) throw new Error('useNamedDispatch must be used within a NamedProvider');
	return context;
};
