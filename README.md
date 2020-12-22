# Book Track Backend

This is the backend for the book tracking frontend that is [here](https://github.com/TheCynosure/book_track). This backend provides a simple CRUD interface to add, delete, finish, and suggest books.

### How to run

Please refer to this [repository](https://github.com/TheCynosure/book_track) for instructions on how to run the entire application.

### Project Gutenberg suggestions

__Note__: If you want to have support for Project Gutenberg suggestions then you must run the script called `uploadTitlesToServer.js` while the MongoDB is running (so after the `mongod` command), you can do this by running:
```
node uploadTitlesToServer.js
```
This will upload the project gutenberg index (as of 2020) to the server and it will be query-able by the frontend. Then the frontend will automatically link to project gutenberg if the book exists.

### Routes

```/books/```

- GET: Get a list of all the books.
- POST: Submit a new book to the book list.
- DELETE: Delete a book from the list.
- PUT: Update the contents of a book.

```/history/```
- GET: Get all the books that are finished.
- POST: Submit a new book to the finished list.

```/gbooks/search/:prefix```

- GET: Gets the top 10 books that start with that prefix in the Gutenberg index and the link to them.

### Code Layout Notes

This is layed out like a standard node / express backend. The routes in the `routes` folder are simply what is listed above. The "logic" for each route endpoint is listed in the `controllers` folder. And the `app.js` ties all the routes together into a single application.
