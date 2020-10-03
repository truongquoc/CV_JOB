import { createArraySelector } from '@utils/selector';
import { LIST, NAME } from './constant';

export const root = (state: any) => state[NAME];

export const jobListSelector = createArraySelector(root, LIST);
