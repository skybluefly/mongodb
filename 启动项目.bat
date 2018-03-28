@Echo off
start cmd /k mongod -config E:\MongoDB\etc\mongo.conf
start cmd /k mongo
start cmd /k "cd/d %cd%\back-end&&npm start"
start cmd /k "cd/d %cd%\front-end&&npm run dev"

