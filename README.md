# mds-cms-2.0
CMS using Node JS, Express

## Routes  
Route | Description  
-|-  
 / | Home route  
 / home | Feeds section  
 / home / subjects | list all subjects with their course count  
 / course / subjectName | List all courses for that specific subject  

## Usage
### Dotenv
add a `.env` file `src/config/env` containing the DB configuration for development or production
### Running the server in development mode (using ts-node)
you have the option to run the server using:  
- node: `npm run start`
- nodemon (monitor file changes): `npm run dev`

### Compiling and Running the server in production mode
we use gulp to automate you need to compile the ts code into valid js code, then run the compiled code.  

```javascript
// compiling the ts server
npm run build

// start the production server
npm run prod
```