# Burrito Shop

This repository contains the code for the `burrito-shop` project. Burrito Shop is a Node.js-based backend application for a mock burrito ordering service. It provides APIs for listing burrito options, placing orders, and viewing orders.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software:

- Node.js (Version 14 or later recommended)
- npm (Node Package Manager)
- Docker (Optional, for containerization)

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

1. **Clone the Repository**

   ```
   git clone https://github.com/mohammadsalim/burrito-shop.git
   cd burrito-shop
   ```

2. **Install Dependencies**

   ```
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory and add the following:

   ```
   BURRITO_SHOP_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual API key.

4. **Compile TypeScript to JavaScript**

   ```
   npx tsc
   ```

### Running the Application

To run the application locally:

```
npm start
```

This will start the server on `http://localhost:3000`.

### Running with Docker (Optional)

To run the application using Docker:

1. **Build the Docker Image**

   ```
   docker build -t burrito-shop .
   ```

2. **Run the Docker Container**

   ```
   docker run -p 3000:3000 burrito-shop
   ```

### Running the Tests

To run the tests:

```
npm test
```

This will execute the test suites defined in the project.

## API Endpoints

- `GET /api/burrito`: List all burrito products.
- `POST /api/orders`: Submit a new order.
- `GET /api/orders`: Get a list of orders.
- `GET /api/orders/:id`: Get details of a specific order.

## Built With

- [Node.js](https://nodejs.org/) - The JavaScript runtime
- [Express](https://expressjs.com/) - The web framework
- [TypeScript](https://www.typescriptlang.org/) - The programming language
- [Docker](https://www.docker.com/) - Containerization platform

## Authors

- **Mohammad Salim** - _Initial work_ - [mohammadsalim](https://github.com/mohammadsalim)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
