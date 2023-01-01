// {"createdAt":"2072-12-27T03:44:22.522Z","orgName":"labore-dolor-et","userName":"Wilburn.Rice","email":"Maverick.Hyatt83@gmail.com","phoneNumber":"(553) 208-0727 x31321","lastActiveDate":"2099-02-28T23:17:40.013Z","profile":{"firstName":"Darian","lastName":"Rolfson","phoneNumber":"494-278-0946","avatar":"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg","gender":"Male","bvn":"815809412","address":"Gusikowski Locks","currency":"NGN"},"guarantor":{"firstName":"Celine","lastName":"Monahan","phoneNumber":"1-482-227-3654 x71086","gender":"Male","address":"O'Hara Centers"},"accountBalance":"496.00","accountNumber":"GWQUSEH1","socials":{"facebook":"@lendsqr","instagram":"@lendsqr","twitter":"@lendsqr"},"education":{"level":"Bsc","employmentStatus":"Employed","sector":"FinTech","duration":"2 Years","officeEmail":"Edna4@yahoo.com","monthlyIncome":["128.57","118.07"],"loanRepayment":"122.47"},"id":"1"},
export interface IUser {
 createdAt: string | number,
 orgName: string,
 userName: string,
 email: string,
 phoneNumber: string | number,
 lastActiveDate: string | number,
 profile: {
  firstName: string,
  lastName: string,
  phoneNumber: string,
  avatar: string | null,
  gender: string,
  address: string,
  currency: string | number,
 },
 guarantor: {
  firstName: string,
  lastName: string,
  phoneNumber: string | number,
  gender: string,
  address: string,
 },
 accountBalance: string | number,
 accountNumber: string,
 socials: {
  facebook: string,
  instagram: string,
  twitter: string
 },
 education:{
  level: string,
  employmentStatus: string,
  sector: string | number,
  duration: string | number,
  officeEmail: string,
  monthlyIncome: [],
  loanRepayment: string | number,  
 },
 id: number
}

export interface IPageMeta {
	total: number;
	per_page: number;
	current_page: number;
	last_page: number;
	first_page: number;
	first_page_url: string;
	last_page_url: string;
	next_page_url: string | null;
	previous_page_url: string | null;
}
