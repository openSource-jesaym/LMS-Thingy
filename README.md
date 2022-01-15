# mds-cms-2.0
A website for Master Data Science students.

## Routes  
Route | Description  
-|-  
 / | Home route  
 / home | Feeds section  
 / home / subjects | list all subjects with their course count  
 / course / subjectName | List all courses for that specific subject  
## Setup
Here are few steps to take in order to get this working locally  

Rename `src/config/env/.env_SAPMLE` to `src/config/env/.env`  

**Running the server in development mode (using ts-node)**  
```javascript
// run the server
npm run start

// run the server + monitor for file change
npm run dev
```
**Compiling and Running the server in production mode**  
We're use [`gulp ➚`](https://gulpjs.com/) for automation.  
You need to compile TypeScript into valid JavaScript code, in order to be able to run it.  

Here is a list with the available options
```javascript
// compiling the ts server
npm run build

// start the production server (PM2)
npm run prod

// start the production server for local testing
npm run prodLocally
```