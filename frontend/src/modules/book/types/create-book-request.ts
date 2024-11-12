export interface CreateBookRequest {
  title: string;
  author_id: number;
  genre_id: number;
  isbn: string;
  publication_date: string;
}