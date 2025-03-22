# ChatBot Project

This project is a chatbot application using Express and the Gemini API.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Setup

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the server directory and add the following environment variables:

    ```plaintext
    PORT=5000
    API_KEY=<your-gemini-api-key>
    ```

## Run the Project

1. Start the server: change the directory into '/server'

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:5000` to see the application running.

## Endpoints

- `GET /`: Returns "Server running on port : 5000`"
- `POST /chat`: Handles chat messages and files, and returns responses from the Gemini API.

## Now open index.html

1. Start the client file index.html: change the directory into '/client'

    ```bash
    npm start: It will automatically start live server.
    ```