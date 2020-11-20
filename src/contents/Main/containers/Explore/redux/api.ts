import { get, post } from '@utils/api';

export const fetchAllJobs = (queryString: string) => {
  console.log('!!!1', queryString);
  return get(`/jobs?${queryString}`);
};

export const fetchDetailJobs = (id: string) => get(`/jobs/${id}`);

export const appliesJob = (id: string) => post(`/jobs/${id}/applies`);
