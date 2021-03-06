import { DETAIL } from '@contents/Example/containers/Common/FlatList/redux/constant';
import { createArraySelector, createObjectSelector } from '@utils/selector';
import { LIST, NAME } from './constant';

export const root = (state: any) => state[NAME];

export const jobListSelector = createArraySelector(root, LIST);
export const jobDetailSelector = createObjectSelector(root, DETAIL);
