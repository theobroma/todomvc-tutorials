import * as z from 'zod';

export const SearchPlaceItemSchema = z.object({
  country: z.string(),
  id: z.number(),
  lat: z.number(),
  lon: z.number(),
  name: z.string(),
  region: z.string(),
  url: z.string(),
});
export type SearchPlaceItemType = z.infer<typeof SearchPlaceItemSchema>;

export const SearchPlaceResponseSchema = z.array(SearchPlaceItemSchema);
export type SearchPlaceResponseType = z.infer<typeof SearchPlaceResponseSchema>;
