import {PagedResponse} from './pagedResponse';
import {Hotel} from '../hotel';
import {AmenityCount} from '../amenityCount';

export interface SearchResponse {
  floorPrice: number;
  ceilPrice: number;
  amenitiesCount: AmenityCount;
  allHotels: Array<Hotel>;
  pagedHotels: PagedResponse<Hotel>;
}
