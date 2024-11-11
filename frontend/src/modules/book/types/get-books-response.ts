export interface GetBooksResponse {
  id: number;
  author: {
    id: number;
    first_name: string;
    middle_name: string | null;
    last_name: string;
  };
  genre: {
    id: number;
    name: string;
  };
  title: string;
  isbn: string;
  publication_date: string;
}