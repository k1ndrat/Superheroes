# Superhero Management App

🦸‍♂️🦸‍♀️ A Superhero Management App 🦸‍♂️🦸‍♀️

## Features

✅ Create, Edit, and Remove Superheroes
   - Assign and Remove Images for Superheroes during Creation/Editing

📜 List All Superheroes
   - Display One Image per Hero with Nickname
   - Pagination (5 Items per Page)

🔍 View Details of a Superhero
   - Display All Information and Images

## Assumptions

📝 The following assumptions were made during development:

1. **Database Setup**: A database system (e.g., MongoDB) is already set up, and connection details are available.

2. **Node.js and npm/yarn**: Node.js and npm (or yarn) are installed on your machine.

3. **React Development Environment**: You have a working React development environment set up.

4. **React Router**: React Router is used for navigation in the project.

## Running the Node.js Backend

1. Clone the repository:

   ```bash
   git clone <repository-url>
   
2. Navigate to the backend directory:

   ```bash
   cd backend
   
3. Install project dependencies:

   ```bash
   npm install

4. Configure the database connection by creating a .env file in the backend directory with your database URL:

   ```bash
   DATABASE_URI=mongodb+srv://s1sk0gryz:test123@cluster0.tsponeg.mongodb.net/Test?retryWrites=true&w=majority
   
5. Start the React development server:

   ```bash
   npm start

## Running the React.js Frontend

1. Open a new terminal window and navigate to the frontend directory:

   ```bash
   cd frontend
   
2. Install dependencies:

   ```bash
   npm install
   
3. Start the React development server:

   ```bash
   npm start

## Accessing the Application

🌐 Access the superhero management system in your web browser:

**`http://localhost:3000`**

🔗 The Node.js backend API endpoints are located at:

**`http://localhost:3500/api/superheroes`**
