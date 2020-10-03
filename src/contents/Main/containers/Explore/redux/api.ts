import { get } from '@utils/api';

export const fetchAllJobs = (queryString: string) => get(`/jobs?${queryString}`);

export const fetchDetailJobs = (id: number) => get(`/jobs?${id}`);
