export interface ResponseApi<T> {
  data: T[];
  total: number;
  page: number;
  size: number;
}
