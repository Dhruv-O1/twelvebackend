# Twelve Backend

This is the backend for the Twelve custom shop product application. It is built using Node.js, Express, and MongoDB.

## Features

- User authentication and management
- Shop creation and management
- Product creation and management
- Relationships between shops and products

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (running locally or accessible remotely)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/twelvebackend.git
   cd twelvebackend



2. Install dependencies:
   npm install

3. Set up environment variables:

PORT=4000 SECRET=your-secret-key


4. **Set up MongoDB**:

Ensure MongoDB is running locally or provide a connection string to a remote MongoDB instance. Update the connection string in [index.js](http://_vscodecontentref_/0):

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/teoonetwelve");

Replace mongodb://127.0.0.1:27017/teoonetwelve with your MongoDB connection string if necessary.


Running the Application
1. Start the server:

npm start




2. Access the API:

The server will run on http://localhost:4000 by default. You can test the API using tools like Postman or cURL.

Project Structure
API Endpoints

User Routes

POST /user - Sign up a new user
POST /user/login - Log in a user
GET /user - Get all users
GET /user/:userId - Get a user by ID
DELETE /user/:userId - Delete a user by ID

Shop Routes

POST /shop/create - Create a new shop
PUT /shop/update/:id - Update a shop
GET /shop/getallwithproduct - Get all shops with their products
GET /shop/getbyid/:shopId - Get a shop by ID

Product Routes

POST /product/create - Create a new product
PUT /product/update/:id - Update a product

License
This project is licensed under the ISC License.

Author
Dhruv Vaishnav




