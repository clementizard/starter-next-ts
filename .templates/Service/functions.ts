import { getNewNamed } from './requests';

export const updateNamed = async (dispatch: Function) => {
	dispatch({ type: 'updateStart' });
	try {
		const data = await getNewNamed();
		dispatch({
			type: 'updateSuccess',
			payload: data,
		});
	} catch (error) {
		dispatch({ type: 'updateFail', payload: error });
	}
};
