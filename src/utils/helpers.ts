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

