import { useEffect } from 'react';
import { useNamedDispatch, useNamedState } from './context';
import { updateNamed } from './functions';

interface State {
	status: string;
	data: any;
}

export default () => {
	const { status, data }: State = useNamedState();
	const dispatch: Function = useNamedDispatch();

	useEffect(() => {
		if (!data.length) updateNamed(dispatch);
	}, []);

	return { status, data };
}
