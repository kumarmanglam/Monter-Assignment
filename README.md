# Monter Assignment

This users to register, verify their accounts, add user information, login, and retrieve user information using APIs.

## Features

- **Register:** Allows users to register with their name, email, and password. Sends an OTP to the provided email address for verification.
- **Verify OTP:** Verifies the user's account using the OTP sent to their email during registration.
- **Add User Information:** Allows verified users to add additional information like age, location, and work details to their profile.
- **Login:** Allows verified users to log in with their email and password. Generates a JWT token for authentication.
- **Get User Information:** Retrieves the information of the authenticated user.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/monter-assignment.git
   ```

2. Navigate to the project directory:

   ```bash
   cd monter-assignment
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   PORT=4000
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASSWORD=your_email_password
   SECRET_KEY=your_secret_key_for_JWT
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Access the API endpoints using tools like Postman or cURL.

## API Documentation

- [Register API](#register)
- [Verify OTP API](#verify-otp)
- [Add User Information API](#add-user-information)
- [Login API](#login)
- [Get User Information API](#get-user-information)

### Register

- **Endpoint:** `/register`
- **Method:** POST
- **Description:** Allows a user to register with their name, email, and password. Sends an OTP to the provided email address for verification.

#### Request Body:

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

#### Success Response:

```json
{
  "message": "OTP sent to your email",
  "email": "user-email@example.com"
}
```

#### Error Responses:

```json
{
  "error": "User already exists"
}
```

### Verify OTP

- **Endpoint:** `/verify`
- **Method:** POST
- **Description:** Verifies the user's account using the OTP sent to their email during registration.

#### Request Body:

```json
{
  "email": "string",
  "OTP": "number"
}
```

#### Error Responses:

```json
{
  "error": "Invalid OTP or Email"
}
```

### Add User Information

- **Endpoint:** `/addUserInfo`
- **Method:** POST
- **Description:** Allows a verified user to add additional information like age, location, and work details to their profile.

#### Request Body:

```json
{
  "email": "string",
  "location": "string",
  "age": "number",
  "workDetails": "string"
}
```

#### Error Responses:

```json
{
  "error": "User not found or not verified"
}
```

### Login

- **Endpoint:** `/login`
- **Method:** POST
- **Description:** Allows a verified user to log in with their email and password. Generates a JWT token for authentication.

#### Request Body:

```json
{
  "email": "string",
  "password": "string"
}
```

#### Error Responses:

```json
{
  "error": "User not found or not verified"
}
```

- When Incorrect Password is given

```json
{
  "error": "Password is incorrect"
}
```

### Get User Information

- **Endpoint:** `/user`
- **Method:** GET
- **Description:** Retrieves the information of the authenticated user.
