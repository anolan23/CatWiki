# CatWiki

This is a full stack application all about cats. Everytime a user searches for a breed of cat, the search query is stored and used to determine the most frequently searched breeds. The home page gives a preview of the top 4 most searched breeds. Each one is clickable and will bring you to their individual breed page. If you click 'See more', you will be taken to a page with the top 10 most searched breeds.


## Built with
Reactjs,
Nodejs/Express,
PostgresQL

## API
You can make a GET request to:\
[/api/breeds](https://aaron-cat-wiki.herokuapp.com/api/breeds)
\
[/api/breeds/:name](https://aaron-cat-wiki.herokuapp.com/api/breeds/Abyssinian)
\
[/api/breeds/trending](https://aaron-cat-wiki.herokuapp.com/api/breeds/trending)

 
to get a preview of data from the API.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

