import { get } from '@utils/api';

export const fetchMyfavoriteJobs = () => get('/jobs/favorites');

export const getAppliedJob = () => get(`/jobs/applied`);
