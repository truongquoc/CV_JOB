import { get } from '@utils/api';

export const fetchAllJobs = (queryString: string) =>
  get(`/jobs?${queryString}`);

export const fetchDetailJobs = (id: string) => get(`/jobs/${id}`);
