import {PagedResponse} from './PagedResponse';
import {Hotel} from '../Hotel';
import {AmenityCount} from '../AmenityCount';

export interface SearchResponse {
  floorPrice: number;
  ceilPrice: number;
  amenitiesCount: AmenityCount;
  allHotels: Array<Hotel>;
  pagedHotels: PagedResponse<Hotel>;
}
