// https://stackoverflow.com/questions/40275832/typescript-has-unions-so-are-enums-redundant
// #1

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE',
// } as const;

// export type FilterType = string; //tmp
// export type FilterType = typeof VisibilityFilters[keyof typeof VisibilityFilters];

// #2
export type FilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL' as FilterType,
  SHOW_COMPLETED: 'SHOW_COMPLETED' as FilterType,
  SHOW_ACTIVE: 'SHOW_ACTIVE' as FilterType,
};
