# Homework: Full Stack Games Hub App

### Learning Objectives

- Understand the relationship between client, server and database
- Be able to navigate a codebase that you haven't written

## Brief

Your boss has asked to you look over the codebase of a full-stack JavaScript application. The front-end is written in JavaScript using React, the back-end uses an Express server and a MongoDB database. Your task is to make yourself familiar with the codebase.

The application includes a README.md with instructions on running the application.

![Overview of the tech stack and tooling with commands](images/tech_stack_with_commands.png)

*Overview of the tech stack and tooling with commands*

*EDIT: Frontend is now written in React with the command to run `npm start`*

## MVP

### Task

Draw a diagram showing the dataflow through the application starting with a form submission, ending with the re-rendering of the page. This will involve a multi-direction data-flow with the client posting data to the server and the server sending data back to the client with the response. Detail the client, server and database in the diagram and include the names of the files involved in the process.

### Questions

1. What is responsible for defining the routes of the `games` resource? 

Answer: server.js calls the create_router.js within the helpers folder which has a default path of localhost:3000 then api/games and also an id if required for the operation.

2. What do you notice about the folder structure?  Whats the client responsible for? Whats the server responsible for?

Answer: the client is responsible for the appearance of the page and the handling of the form submission to the server and the display of the returning data. The server is reponsible for routing the requests from the front end correctly and communicating with the database.

3. What are the the responsibilities of server.js?

Answer: Listening for requests from the front end and handling them via the router

4. What are the responsibilities of the `gamesRouter`?\

Answer: The router is creating routes that can be accessed via different methods (Get, Post, Delete, Put) then handling the request correctly to the database and providing a response back.

5. What process does the the client (front-end) use to communicate with the server?

Answer: the client uses the games container to handle requuests via the services/gamesservice.js to get  'Post' if the form has been submitted with new data or 'Delete' with an 'id' after user has pressed a delete button on an existing record. 

6. What optional second argument does the `fetch` method take? And what is it used for in this application? Hint: See [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) on the MDN docs

Answer: the init object is the second argument. Allows us to specify the method and content type.

7. Which of the games API routes does the front-end application consume (i.e. make requests to)?

Answer: it uses a GET to aquire all the data on the games, a POST to add a game and a DELETE to delete a game from the database.

8. What are we using the [MongoDB Driver](http://mongodb.github.io/node-mongodb-native/) for?

Answer: it allows the server application to connect with mongoDb and access the data

## Extension

Why do we need to use [`ObjectId`](https://mongodb.github.io/node-mongodb-native/api-bson-generated/objectid.html) from the MongoDB driver?

Answer: It allows us to delete a specific record in the database by ID 

Add to your diagram the dataflow for removing a game.
