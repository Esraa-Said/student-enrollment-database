# Frontend

## Main Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


# Backend 
## Main Scripts 
### npm install 
    installing dependancies
### npm start
    run the app



# database 
## mysql deployed on planet scale

### used tables 
 1- Students
 
 2- Groups
 
 3- Subjects
 
 4- Grades
 
 5- Teachers

# Student Enrollment App
you can try using link : [https://esk-students-enrollment.netlify.app]
Password for admin: feng 



## Options in the app: 

### User options 
 1- Show all students info 
 
 2- Show info of students in a specific year
 
 3- Show students grades in a specific year
 
 4- Show subjects and teachers for subjects
 
 5- show student with its grades using id
 
 ### Admin extra options 
 1- Add student
 
 2- Delete student 
 
 3- Update student info 
 
 4- Update student grades
 
 ## App validations 
  validate on every feild with correct values 
  
  ## Data set 
    generating testcases to test the functionalty
    
  ## Deployment 
    using railway and netfily to deploy the app
   
  # How to run app on your localhost ? 
  
  ### 1 - clone the repo 
    git clone https://github.com/Esraa-Said/student-enrollment-database.git
    
  ### 2- set env variables 
  
   1- make sure you are in the root of the folder 
    
   2- create .env file 
    
   3- set env variables which are [PORT] , [DATABASE_URL] and  [ORIGIN_URL].
    PORT : port value you choose for example 5000
    DATABASE_URL : connection string of online database
    ORIGIN_URL: the url of the frontend server the avoid CORS problem.
    
   4- go to ui folder `cd ui`.
    
   5- create another .env file
    
   6- set variable `REACT_APP_BASE_URL = `http://localhost:[PORT]/api` . change PORT with the value you choose for example 5000
    
   7- back to root of the folder `cd ..`
    
  ### 3- create database schema 
    
   1- run command `node model/mainStructure.js` to open api for creating tables 
    
   2- call all routes to create all tables. for example `http://localhost:3000/teacher` in your browser
    
   3- after creating all tables close the server.
    
  ### 4- open backend server by the following steps 
    
   1- make sure you are in the root of the folder 

   2- run command [npm install] to install dependancies
    
   3- run command [npm start] to run the server
    
   4- don't close this server while running
   ### 5- open frontend React app  
   
   1- go to ui folder using `cd ui` from another terminal 
   
   2- run command [npm install] to install dependancies
    
   3- run command [npm start] to run the server
   
   4- open your brower on `http://localhost:3000` to see the project

   
