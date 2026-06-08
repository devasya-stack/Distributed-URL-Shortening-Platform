# Distributed URL Shortener

A full-stack URL shortening application built using React, Node.js, Express.js, and MySQL. The application converts long URLs into short, shareable links and redirects users to the original destination URL.

## Features

* Generate unique short URLs
* Redirect shortened URLs to original URLs
* Store URL mappings in MySQL database
* RESTful API architecture
* React-based frontend interface
* Express.js backend server
* MySQL database integration

## Tech Stack

### Frontend

* React.js
* Axios
* Vite

### Backend

* Node.js
* Express.js

### Database

* MySQL

## Project Structure

distributed-url-shortener/

backend/

* src/

  * config/
  * controllers/
  * routes/
  * service/
  * app.js
* server.js

frontend/

* src/

  * components/
  * App.jsx
  * main.jsx

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/distributed-url-shortener.git
cd distributed-url-shortener
```

### Backend Setup

```bash
cd backend
npm install
node server.js
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

## Database Setup

Create Database:

```sql
CREATE DATABASE url_shortener;
```

Create Table:

```sql
CREATE TABLE urls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    original_url TEXT NOT NULL,
    short_code VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### Create Short URL

POST

```http
/shorten
```

Request:

```json
{
  "originalUrl": "https://google.com"
}
```

### Redirect URL

GET

```http
/:code
```

Example:

```http
http://localhost:5000/abc123
```

## Future Improvements

* User Authentication
* Custom Short URLs
* URL Analytics Dashboard
* Click Tracking
* QR Code Generation
* Redis Caching
* Docker Deployment
* Kubernetes Deployment

## Author

Devasya Ojha

## License

This project is developed for educational and learning purposes.


## How to Run the Project

### Step 1: Start MySQL

Make sure MySQL Server is running.

Create the database:

```sql
CREATE DATABASE url_shortener;
```

Use the database:

```sql
USE url_shortener;
```

Create the table:

```sql
CREATE TABLE urls (
    id INT AUTO_INCREMENT PRIMARY KEY,
    original_url TEXT NOT NULL,
    short_code VARCHAR(50) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

### Step 2: Start Backend

Open Terminal 1:

```bash
cd backend
npm install
node server.js
```

Expected Output:

```bash
Server Running on Port 5000
MySQL Connected
```

---

### Step 3: Start Frontend

Open Terminal 2:

```bash
cd frontend
npm install
npm run dev
```

Expected Output:

```bash
VITE v7.x ready

Local: http://localhost:5173/
```

Open the URL shown in the browser.

---

### Step 4: Generate Short URL

1. Enter a URL such as:

```text
https://google.com
```

2. Click **Shorten**.

3. The application generates a unique short URL.

Example:

```text
http://localhost:5000/AbC123x
```

---

### Step 5: Test Redirect

Open the generated short URL in the browser:

```text
http://localhost:5000/AbC123x
```

Expected Output:

The browser automatically redirects to:

```text
https://google.com
```

---

## Sample Output

Input:

```text
https://google.com
```

Generated Short URL:

```text
http://localhost:5000/XyZ123a
```

Redirection:

```text
http://localhost:5000/XyZ123a
        ↓
https://google.com
```

---

## Troubleshooting

### Backend Error

Check:

```bash
node server.js
```

Expected:

```bash
Server Running on Port 5000
MySQL Connected
```

### MySQL Error

Verify database:

```sql
SHOW TABLES;
```

Expected:

```text
urls
```

### Port Already in Use

Kill the existing process or use another port in:

```javascript
server.js
```



