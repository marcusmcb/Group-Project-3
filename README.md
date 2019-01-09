# Group-Project-3
Group Project 3 repo for UCI Coding BootCamp.

NPMs required (main directory/back end - these go in the root folder) -

* bcryptjs (password validation)
* body-parser
* express
* gravatar (for user profile picture)
* jsonwebtoken (sets automatic log-out time)
* mongoose
* passport (for keeping user posts private)
* passport-jwt (for keeping user posts private)
* validator (field-input validation)
* react
* react-scripts
* react-dom

NPMs required (client folder/front end - these go in the client folder) -

* axios
* classnames
* jwt-decode
* moment
* react
* react-dom
* react-moment
* react-redux
* react-router-dom
* react-scripts
* redux
* redux-thunk

You will have 2 package.json files, one in the root folder, the other in the client folder.  Add the following line into the package.json file found in the client folder:

"proxy": "http://localhost:5000"

Without it, the app will not start.  There's a NPM called Concurrently installed that allows the two ends of the app to run together without having to "start" the app from two different terminals.

Once all NPMs have been properly installed use "npm run dev" to start the app from the root folder (not the client folder).

