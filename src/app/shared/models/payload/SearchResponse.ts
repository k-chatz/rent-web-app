import {PagedResponse} from './PagedResponse';
import {Hotel} from '../Hotel';
import {AmenitiesCount} from '../AmenitiesCount';

export interface SearchResponse {
  floorPrice: number;
  ceilPrice: number;
  amenitiesCount: AmenitiesCount;
  allHotels: Array<Hotel>;
  pagedHotels: PagedResponse<Hotel>;
}
