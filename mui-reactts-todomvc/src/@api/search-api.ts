import type { SearchPlaceResponseType } from '../@types';

import { weatherAxiosInstance } from './api';

export const searchAPI = {
  place(place: string) {
    return weatherAxiosInstance.get<SearchPlaceResponseType>(
      `/search.json?q=${place}`,
    );
  },
};
