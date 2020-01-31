export const getFromLocalOrDefault = (state: any, key: string) => {
	if (process.browser) {
		const item = localStorage.getItem(key);
		return item ? JSON.parse(item) : state;
	}
	return state;
};
export const getFromSessionOrDefault = (state: any, key: string) => {
	if (process.browser) {
		const item = sessionStorage.getItem(key);
		return item ? JSON.parse(item) : state;
	}
	return state;
};
export const saveToLocal = (state: any, key: string) =>{
	if (process.browser) localStorage.setItem(key, JSON.stringify(state));
};
export const saveToSession = (state: any, key: string) =>{
	if (process.browser) sessionStorage.setItem(key, JSON.stringify(state));
};
