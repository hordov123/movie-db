
export type SearchedMovie = {
    Poster: string;
    Title: string;
    Type:  'movie' | 'series' | 'episode';
    Year: string;
    imdbID: string;
}

export type SearchMovieResult = {
    Search: SearchedMovie[];
    totalResults: string;
    Error: string;
    Response: boolean
}