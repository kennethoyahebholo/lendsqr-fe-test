import { buildPageQuery } from '../utils/helpers';
import axios from "axios"

export interface IPageQuery {
	page?: number;
	search?: string;
	status?: string;
	role?: string;
	amount?: string;
	customer_id?: number | string;
	limit?: string | null;
	transaction_type?: string;
	created_at?: string[];
}

export const lendSqrApi = axios.create({
	baseURL: "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/",
	timeout:  100000,
});

const USERS_ENDPOINT = "/users"

export const listUsers = async (pageQuery?: IPageQuery) => {
	try {
		const url = `${USERS_ENDPOINT}${buildPageQuery(pageQuery)}`;
		const { data } = await lendSqrApi.get(url);
		return data;
	} catch (error) {
		throw error;
	}
};

export const findUser = async (userId: string) => {
	try {
		const { data } = await lendSqrApi.get(
			`${USERS_ENDPOINT}/${userId}`
		);
		return data;
	} catch (error: any) {
		const { data } = error.response;
		throw new Error(data?.message || 'fatal error');
	}
};

