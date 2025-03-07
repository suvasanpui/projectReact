# Voting System Backend

A backend server implementation for a voting system application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file with the following variables:
```
PORT=8000
DB_CONNECTION_STRING=your_database_connection_string
```

3. Start the server:
```bash
npm run dev
```

## API Endpoints

### Base URL
- `GET /` - Welcome message

### Users
- `users/*` - User management endpoints

### Users Endpoints

#### User Registration
```javascript
POST /users/signup
- Register new voter or admin
- Body: { name, age, email, contact, address, voterNo, password, role }
- Validates:
  * Only one admin account allowed
  * Voter number (12 digits)
  * Contact (min 10 digits)
  * Age (≥ 18)
- Returns: User data and JWT token
```

#### User Authentication
```javascript
POST /users/login
- Authenticate user credentials
- Body: { voterNo, password }
- Validates:
  * Voter exists
  * Password matches
- Returns: 
  * User details
  * JWT token
  * Success message
```

#### Error Responses
- `400 Bad Request` - Invalid registration data
- `401 Unauthorized` - Invalid login credentials
- `403 Forbidden` - Admin already exists
- `500 Internal Server Error` - Server issues

### Electors
- `electors/*` - Elector management endpoints

### Electors Endpoints

#### Candidate Management
```javascript
POST /electors/signup
- Create new election candidate
- Requires admin access & JWT token
- Body: { name, age, email, contact, address, voterNo, password, party }
- Validates: 
  * Voter number (12 digits)
  * Contact (min 10 digits)
  * Age (≥ 18)
```

#### Voting Operations
```javascript
POST /electors/votes/:electorsID
- Record a vote for candidate
- Requires JWT token
- Validates:
  * Valid voter & candidate
  * No previous votes
  * Non-admin voters only
```

#### Vote Information
```javascript
GET /electors/votes/counts
- Get total vote counts
- Admin access only
- Returns sorted candidate list with votes

GET /electors/
- List all candidates
- Requires JWT token
- Returns: name, party, id

GET /electors/votes/result/:electorId
- Get specific candidate votes
- Requires JWT token
- Returns: candidate details & vote count
```

#### Error Responses
- `403 Forbidden` - Admin access required
- `404 Not Found` - Invalid IDs
- `400 Bad Request` - Validation errors
- `500 Internal Server Error` - Server issues

------------------------------------------------------------------------------------------------------------------------------

## Authentication

The API uses JSON Web Tokens (JWT) for authentication.

### JWT Authentication
- Tokens are required for protected endpoints
- Include token in Authorization header: `Bearer <token>`
- Tokens expire after 5 minutes

### Authentication Endpoints
- `POST /users/login` - Returns JWT token upon successful login
- Protected routes require valid JWT token in Authorization header

### Token Format
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Error Responses
- `401 Unauthorized` - Token missing or invalid
- `401 Token Not Found` - No Authorization header present
- `401 Invalid token` - Token validation failed

-------------------------------------------------------------------------------------------------------------------------------

## Database

### MongoDB Configuration
- Database: MongoDB
- Connection: Mongoose ODM
- Default Port: 27017
- Environment Variable: `DB_CONNECTION_STRING`

### Database Models

#### User Model
```javascript
{
  name: {
    type: String,
    required: true
  },
  email: String,
  contact: String,
  voterNo: {
    type: Number,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  isVoted: {
    type: Boolean,
    default: false
  },
  role: {
    type: String,
    enum: ["voter", "admin"],
    default: "voter"
  }
}
```

### User Features
- Role-based access control (voter/admin)
- Secure password handling with bcrypt
- Voting status tracking
- Unique voter number validation

### User Methods
- `comparePassword(candidatePassword)`: Password validation
- Pre-save middleware for password encryption
- Automatic role assignment

### User Security
- Password hashing with salt rounds of 10
- Role-based authorization
- Voting status protection
- Unique voter number enforcement

#### Elector Model
```javascript
{
  // Basic Information
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  email: String,
  contact: String,
  address: {
    type: String,
    required: true
  },
  voterNo: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  party: {
    type: String,
    required: true
  },
  votes: [{
    user: {
      type: ObjectId,
      ref: "User"
    },
    votedAt: Date
  }],
  voteCount: {
    type: Number,
    default: 0
  }
}
```

### Elector Features
- Secure password hashing using bcrypt
- Automatic password encryption on save
- Vote tracking system with timestamps
- Reference to User model for vote tracking
- Unique voter identification system

### Methods
- `comparePassword(password)`: Validates elector passwords
- Pre-save middleware for password hashing
- Automatic vote counting mechanism

### Security Features
- Passwords are never stored in plain text
- Uses salt rounds of 10 for hashing
- Built-in password comparison utilities

### Database Operations
- CRUD operations supported for both models
- Mongoose middleware for data validation
- Indexes on frequently queried fields
- Automatic timestamps for created/updated dates

### Error Handling
- Connection errors logged to console
- Validation errors returned as 400 responses
- Duplicate key errors handled gracefully

-------------------------------------------------------------------------------------------------------------------------------

## Technologies Used
- Express.js
- MongoDB (via mongoose)
- CORS enabled
- Body Parser for JSON
------------------------------------------------------------------------------------------------------
