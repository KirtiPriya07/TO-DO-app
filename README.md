### About project
A simple todo list app with CRUD functionalities created with react, fastapi and mongodb.

### Run backend
1. Create .env file in app folder with 
    DATABASE_URL= "<database url>"
    JWT_SECRET_KEY= "<jwt secret key>"
    JWT_REFRESH_SECRET_KEY= "<jwt refresh secret key>"
3. Install dependencies from requirements.txt
4. run command: uvicorn app.app:app --reload

### Run frontend
1. Inside frontend folder run command: yarn build
2. run command: yarn start

Open http://localhost:3000/ in browser
