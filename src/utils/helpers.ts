import moment from 'moment';
// import moment = require('moment');

export const cleanColumnArray = (columns: any) => columns?.map?.((ele:any) => {
  if (Array.isArray(ele)) {
    return ele?.join('__');
  } return ele;
});

export const parseJSON = (str: string) => {
  try {
    return JSON.parse(str);
  } catch (e) {
    return {};
  }
};

export const setItemsToLocalStorage = (name:string, data:any) => {
  localStorage.setItem(name, JSON.stringify(data));
};
export const getItemsToLocalStorage = (name:any) => {
  const actualData = JSON.parse(localStorage.getItem(name) || '{}');
  return actualData;
};

export function buildPageQuery(pageQuery?: Record<string, any>, appendQuestionMark = true): string {
	if (!pageQuery) return '';

	let query = Object.keys(pageQuery)
		.reduce((query: string[], key) => {
			let value = pageQuery[key];
			if (typeof value === 'string') {
				value = value.trim();
			}

			if ((value || typeof value == 'boolean') && value !== '') {
				query.push(`${key}=${value}`);
			}

			return query;
		}, [])
		.join('&');

	if (appendQuestionMark && query && query !== '') query = '?' + query;

	return query;
}

export const titleCase = (s: string) =>
	s
		.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()) // Initial char (after -/_)
		.replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()); // First char after each -/_

export const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const truncate = (str: string | undefined, n: number) => {
	if (typeof str === 'string') return str.length > n ? str.substring(0, n - 1) + '...' : str;
	return str;
};

export function toDateFormat(date: string | number | Date, format: string = 'DD MMMM YYYY') {
	return moment(new Date(date)).format(format);
}

export const capitalizeEverFirstLetter = (string:any) => string.replace(/(^\w|\s\w)(\S*)/g, (_:any, m1:any, m2:any) => m1.toUpperCase() + m2.toLowerCase());

// export const toDateFormat = (date: string | number, format: string = 'DD MMMM YYYY', returnVal: string = '______') => {
//   if (!date) return returnVal;
//   if (new Date(date).toString() === 'Invalid Date') return returnVal;
//   return moment(new Date(date)).format(format);
// };


