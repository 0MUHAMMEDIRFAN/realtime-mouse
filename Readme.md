### Click To See [Live Demo](https://realtime-mouse.onrender.com)

# Realtime Mouse Pointer Tracking

This project demonstrates a real-time mouse pointer tracking system where every user's mouse movements are visible to all other users connected to the same URL. Each user is assigned a random color for their cursor, and their username is displayed alongside the cursor. The project uses Socket.IO to achieve this functionality.

## Features

- Real-time mouse pointer tracking for all connected users.
- Random colors assigned to each user's cursor.
- Usernames displayed next to the cursor.
- Usernames can be updated.
- List of all connected users displayed on the main page.

## Technologies Used

- Node.js and Express
- CSS
- JavaScript
- Socket.IO

## Testing

To test the functionality:

1. Open the URL in two or more browser windows.
2. Move the cursor around the page in each window.
3. Observe the cursor movements in real-time across all windows.
4. Update the username and see the changes reflected in real-time.
5. Check the list of connected users on the main page.

## Design

- The cursor design and username display are optimized for clarity and visibility.
- Each user's cursor is uniquely colored for easy identification.

## Usage

1. Clone the repository.
2. Install the necessary dependencies.
3. Run the server.
4. Open the URL in multiple browser windows to see the real-time cursor tracking in action.

## Commands to Run the Project

```sh
git clone https://github.com/0MUHAMMEDIRFAN/realtime-mouse.git
```

After cloning the repository, follow these steps to start the project:


1. Navigate to the project directory:

    ```sh
    cd realtime-mouse
    ```

2. Install the necessary dependencies:

    ```sh
    npm install
    ```

3. Start the server:

    ```sh
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the real-time cursor tracking in action.

## Repository

You can find the project repository on GitHub: [realtime-mouse](https://github.com/0MUHAMMEDIRFAN/realtime-mouse) Realtime Mouse Pointer Tracking
