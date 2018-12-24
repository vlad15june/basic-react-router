
export const GET_ISSUES_OF_REPOSITORY = 'GET_ISSUES_OF_REPOSITORY';

export const getIssuesOfRepository = path =>{
	type: GET_ISSUES_OF_REPOSITORY,
	path
};