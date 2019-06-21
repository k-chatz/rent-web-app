export interface PagedResponse<T> {
  content: Array<T>;
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}
