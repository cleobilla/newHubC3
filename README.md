# HUB C3 - Projeto ITecCorona - C3VIDA19

First, you must set DB config in order to work. Change ./server/config/db.config.js file.
 
 To install dependecies:
 	> npm install 
To test:
	> npm run dev
To deploy on google cloud:
	- Create a Project for App Engine. Don't forget to write down the projectID, you will need it. 
	> npm run build
	> gcloud app deploy app.yaml --project projectID
