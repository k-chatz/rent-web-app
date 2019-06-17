import {PagedResponse} from './PagedResponse';
import {Hotel} from '../Hotel';
import {AmenitiesCount} from '../AmenitiesCount';

export interface SearchResults {
  results: PagedResponse<Hotel>;
  amenitiesCount: AmenitiesCount;
  minPrice: number;
  maxPrice: number;
}
