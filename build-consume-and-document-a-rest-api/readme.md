# Build Consume and Document a REST API


This follows the [freecodecamp tutorial](https://www.freecodecamp.org/news/build-consume-and-document-a-rest-api)

This API is for a pet shelter business. The pet helter needs to register the pets that are staying in the shelter, and for that we'll perform basic CRUD operations (create, read, update and delete).

The application will contain 5 different layers, known as a `layers architecture`:

1. The application layer will have the basic setup of our server and the connection to our routes (the next layer).
2. The routes layer will have the definition of all of our routes and the connection to the controllers (the next layer).
3. The controllers layer will have the actual logic we want to perform in each of our endpoints and the connection to the model layer (the next layer, you get the idea...)
4. The model layer will hold the logic for interacting with our mock database.
5. Finally, the persistence layer is where our database will be.