export type MovieDetail = {
 Actors: string
 Awards: string;
 BoxOffice: string;
 Country: string;
 DVD: string;
 Director: string;
 Genre: string;
 Language: string;
 Metascore: 'N/A' | string;
 Plot: string;
 Poster: string;
 Production: 'N/A' | string;
 Ratings: Ratings;
 Rated: string;
 Released: string;
 Response: string;
 Runtime: string;
 Title: string;
 Type: 'movie' | 'series' | 'episode';
 Website: string;
 Writer: string;
 Year: string;
 imdbID: string;
 imdbRating: string;
 imdbVotes: string;
 totalSeasons: string;
 Error: string;
}

export type Ratings = {
 Source: string;
 Value: string;
}