# Design and implement mock APIs for a hypothetical online bookstore, then develop a comprehensive automated testing suite for these APIs.

API made using Node.js, Express.js, and MongoDB

### API Features:

1. **Books**
   - Show a list of books to buy
   - Show individual book details
2. **Purchase**
   - Books can be purchased only by logged in user
   - Purchase is allowed only if the book is in stock

3. **User**
   - User signup / login feature available
   - A  user can signup by Name, Email and Password
   - For login, Email and Password_ is required
   - Authentication is done by JWT tokens


    - ### Guide to local setup

1. Clone this repository
  https://github.com/nami02091995/BookStoreDemo.git
2. Install node packages (from root directory)
3. Setup a database 
4. Add **"jwtSecret"** and **"admin-signup-key"** key's value of your choice in `default.json`
5. Run development server
   npm run server
7. Use the API in any  API testing tool





# BookStore API Documentation

### 1. Users

| Method/URI                | Description                                                                               | Access |
| ------------------------- | ----------------------------------------------------------------------------------------- | ------ |
| `POST` api/users/register | Register a user <br> **Body**: name, email, password                                      | Public |
| `POST` api/users/login    | Login user and get token <br> **Body**: email, password                                   | Public |


### 2. Books

| Method/URI                 | Description                                                                                                              | Access               |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------ | -------------------- |
| `GET` api/books            | Get list of book which are in stock                                                                                      | Public               |
| `GET` api/books/:bookId    | Get a book with ID <br> **Parameters**: bookId                                                                           | Public               |

### 3. Purchases

| Method/URI                         | Description                                                                              | Access  |
| ---------------------------------- | ---------------------------------------------------------------------------------------- | ------- |
| `POST` api/purchases               | Make a purchase <br> **Body**: bookId <br> **Headers**: x-auth-token                     | Private |


