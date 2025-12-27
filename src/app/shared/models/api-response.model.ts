export interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}