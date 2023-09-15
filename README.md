# Movie Database
A simple Movie Database made with React & TypeScript.

App consists of three pages: 
### Search
On this page, users can search for movies from OMDB API, add or remove them from favourites & click on card to be redirected to movie detail. 
Searched movies are paginated.

### Favourites
This page serves the purpose of displaying favourite movies. Movies are stored in local storage and can be removed. 
Clicking on movie card leads user to movie detail. Search function also works on this page so users can find movies in 
their favourites.

### Detail
On this page user can view details of movie they have clicked on in one of the previous pages. 
Movie can be added or removed from favourites. Searching for movie on this page navigates user to search page.

## Technologies
TypeScript, Material UI, react-router, context api, react-query, code splitting.

### Styling
For stiling I have used combination of SCSS and Tailwind. Design of app is responsive.

### Future Improvements
 - Add more powerful notification system with animations and undo functionality.
 - Front page with new/popular/random movies - Probably will need to use some other API.
 - Design, look & feel improvements.