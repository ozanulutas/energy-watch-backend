![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

# Energy Watch

:zap::boom: [Project Link](https://energy-watch-frontend.vercel.app/)

This is the backend of Energy Watch project which watches the energy consumption of facilities and performs basic CRUD operations with MongoDB and PostgreSQL. 


## Table of Contents

* [Technologies](#technologies)
* [Features](#features)
* [API](#api)
* [Project Setup](#project-setup)


## Technologies

- Node.js
- Express
- MongoDB
- PostgreSQL


## Features

- Performs basic CRUD operations with MongoDB and PostgreSQL. MongoDB is used for recording users and performing authorization. PostgreSQL is used for recording facility and consumption info.
- User authentication and authorization is proivded by JWT.
- Admin (read, write, delete), Editor (read, write), User(write).
- Users is allowed to create new table columns. It is achived by holding user specified custom fields in a single JSON type column in each table. It is not preferred for the user to change the table schema by altering table as it is not a useful method.
- Custom column's meta info is kept in another table. Dynamic validation is provided by this table's records.

## API

### Authorization

All API requests (excluding login and register) require the use of a JWT. 

To authenticate an API request, you should provide your JWT in the `x-access-token` header.

### User

#### Login

```http
POST /user/login
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `email` | `string` | **Required** |
| `password` | `string` | **Required** |

#### Register

```http
POST /user/register
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `email` | `string` | **Required** |
| `name` | `string` | **Required** |
| `role` | `string` | **Required** |
| `password` | `string` | **Required** |

#### Update Settings

```http
PUT /user/:id/settings
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | **Required** |
| `name` | `string` | **Required** |
| `role` | `string` | **Required** |

#### Update Password

```http
PUT /user/:id/password
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `string` | **Required** |
| `password` | `string` | **Required** |

### Facility

#### Get All Records

```http
GET /facilities
```

#### Create New Record

```http
POST /facilities
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | **Required** |
| `membership_start_date` | `string` | **Required**, *YYYY-MM-DD* |
| `membership_end_date` | `string` | **Required**, *YYYY-MM-DD* |
| `employees` | `integer` | **Required** |
| `is_special` | `boolean` | **Required** |
| `custom_cols` | `any` | This field's content is dynamically created by user's response. Response body props which starting with "_" is added to custom_col object. |

#### Update Record

```http
PUT /facilities/:id
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `integer` | **Required** |
| `name` | `string` | **Required** |
| `membership_start_date` | `string` | **Required**, *YYYY-MM-DD* |
| `membership_end_date` | `string` | **Required**, *YYYY-MM-DD* |
| `employees` | `integer` | **Required** |
| `is_special` | `boolean` | **Required** |
| `custom_cols` | `any` | This field's content is dynamically created by user's response. Response body props which starting with "_" is added to custom_col object. |

#### Delete Record

```http
DELETE /facilities/:id
```

### Consumption

#### Get All Records

```http
GET /consumptions
```

#### Get Facility Consumptions

```http
GET /consumptions/facilities/:facilityId
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `facility_id` | `integer` | **Required** |

#### Create New Record

```http
POST /consumptions
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `start_date` | `string` | **Required**, *YYYY-MM-DD* |
| `end_date` | `string` | **Required**, *YYYY-MM-DD* |
| `department` | `string` | **Required** |
| `fee` | `double` | **Required** |
| `discounted_price` | `double` | **Required** |
| `consumption` | `double` | **Required** |
| `facility_id` | `integer` | **Required** |
| `custom_cols` | `any` | This field's content is dynamically created by user's response. Response body props which starting with "_" is added to custom_col object. |

#### Update Record

```http
PUT /consumptions/:id
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `integer` | **Required** |
| `start_date` | `string` | **Required**, *YYYY-MM-DD* |
| `end_date` | `string` | **Required**, *YYYY-MM-DD* |
| `department` | `string` | **Required** |
| `fee` | `double` | **Required** |
| `discounted_price` | `double` | **Required** |
| `consumption` | `double` | **Required** |
| `facility_id` | `integer` | **Required** |
| `custom_cols` | `any` | This field's content is dynamically created by user's response. Response body props which starting with "_" is added to custom_col object. |

#### Delete Record

```http
DELETE /consumptions/:id
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `id` | `integer` | **Required** |

### Custom Columns

#### Get Available Types

```http
GET /custom-cols/types
```

#### Get Custom Columns Belongs To Table

```http
GET /custom-cols/table/:tblId
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `tbl_id` | `integer` | **Required** |

#### Create New Record

```http
POST /custom-cols
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `tbl_id` | `integer` | **Required** |

#### Delete Record

```http
DELETE /custom-cols/:colName/table/:tblId
```

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | **Required** |
| `tbl_id` | `integer` | **Required** |


## Project setup
```
npm install
```

### Starts dev server with nodemon
```
npm run serve
```
