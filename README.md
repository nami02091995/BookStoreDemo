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
