import { FilterEnum } from '@/enums/filter.enum';

export const filterToHref: Record<FilterEnum, string> = {
  [FilterEnum.All]: '#/',
  [FilterEnum.Active]: '#/active',
  [FilterEnum.Completed]: '#/completed',
};
