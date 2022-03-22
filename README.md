## Motivation

This is a study case on how to implement clean architecture in a simple API with Node.js, Typescript, and MongoDB. It implements the repository pattern, respecting the open-closed principle, as well as the dependecy inversion and injection principles. 

## Development Mode

### Set environment variables

Create a .env file in the root of the project with: 

```env
DB_URI=<your-mongodb-uri>
```

### Install dependencies

```shell
yarn
```

### Start the server

```
yarn run start
```

## Endpoints

**Path**: `/clubs`

**Method**: `POST`

**Body**:

```json
{
	"name": "Barcelona",
	"country": "spain"
}
```

**Sample Response**:

status: 201

```json
{
  "name": "Barcelona",
  "country": "spain",
  "_id": "622fbf5f68ca35db239687c4",
  "__v": 0
}
```

___

**Path**: `/clubs/:id`

**Method**: `PUT`

**Body**:

```json
{
	"name": "",
	"country": "" 
}
```

**Sample Response**:

status: 200

```json
{
  "name": "",
  "country": "",
  "_id": "",
  "__v": 0
}
```
___

**Path**: `/clubs`

**Method**: `GET`

**Queries (optional)**:

`country=`

`name=`

**Body**: no body

**Sample Response:**

status: 200

```json
[
  {
    "_id": "6213f0afb7fba2571508a9b4",
    "name": "Man United",
    "country": "England",
    "__v": 0,
    "players": [
      {
        "_id": "6213f0d9b7fba2571508a9b7",
        "name": "Bruno Fernandes",
        "position": "defender",
        "club": "6213f0afb7fba2571508a9b4",
        "__v": 0
      },
      {
        "_id": "62169d74d38a2a4e6a35b57b",
        "name": "CR7",
        "position": "forward",
        "club": "6213f0afb7fba2571508a9b4",
        "__v": 0
      }
    ]
  },
  {
    "_id": "622fbf5f68ca35db239687c4",
    "name": "Barcelona",
    "country": "spain",
    "__v": 0,
    "players": [
      {
        "_id": "622fbf7e68ca35db239687c6",
        "name": "Alba",
        "position": "forward",
        "club": "622fbf5f68ca35db239687c4",
        "__v": 0
      }
    ]
  }
]
```

___

**Path**: `/clubs/:id`

**Method**: `GET`

**Body**: no body

**Sample Response:**

status: 200

```json
{
  "_id": "6213f0afb7fba2571508a9b4",
  "name": "Man United",
  "country": "England",
  "__v": 0,
  "players": [
    {
      "_id": "6213f0d9b7fba2571508a9b7",
      "name": "Bruno Fernandes",
      "position": "defender",
      "club": "6213f0afb7fba2571508a9b4",
      "__v": 0
    },
    {
      "_id": "62169d74d38a2a4e6a35b57b",
      "name": "CR7",
      "position": "forward",
      "club": "6213f0afb7fba2571508a9b4",
      "__v": 0
    }
  ]
}
```
___

**Path**: `clubs/:id`

**Method**: `DELETE`

**Body**: `no body`

**Sample Response**: `status 200 | 400`

___

**Path**: `/players`

**Method**: `POST`

**Body**:

```json
{
	"name": "Alba",
	"position": "forward",
	"club": "622fbf5f68ca35db239687c4"
}
```

**Sample Response**:

status: 201

```json
{
  "name": "Alba",
  "position": "forward",
  "club": "622fbf5f68ca35db239687c4",
  "_id": "622fbf7e68ca35db239687c6",
  "__v": 0
}
```
___

**Path**: `/players/:id`

**Method**: `PUT`

**Body**:

```json
{
  "club": "",
  "name": "",
  "position": ""
}
```

**Sample Response**:

status: 200

```json
{
  "_id": "6210e8485d03334255b30bf8",
  "name": "Messi",
  "position": "forward",
  "__v": 0,
  "club": "620f9e01ccad547601f3e193"
}
```

___

**Path**: `/players`

**Method**: `GET`

**Queries (optional)**:

`position=`

`name=`

**Body**: no body

**Sample Response:**

status: 200

```json
[
  {
    "_id": "6213f0d9b7fba2571508a9b7",
    "name": "Bruno Fernandes",
    "position": "defender",
    "club": {
      "_id": "6213f0afb7fba2571508a9b4",
      "name": "Man United",
      "country": "England",
      "__v": 0
    },
    "__v": 0
  },
  {
    "_id": "62169d74d38a2a4e6a35b57b",
    "name": "CR7",
    "position": "forward",
    "club": {
      "_id": "6213f0afb7fba2571508a9b4",
      "name": "Man United",
      "country": "England",
      "__v": 0
    },
    "__v": 0
  },
  {
    "_id": "622fbf7e68ca35db239687c6",
    "name": "Alba",
    "position": "forward",
    "club": {
      "_id": "622fbf5f68ca35db239687c4",
      "name": "Barcelona",
      "country": "spain",
      "__v": 0
    },
    "__v": 0
  }
]
```

___

**Path**: `/players/:id`

**Method**: `GET`

**Body**: no body

**Sample Response:**

status: 200

```json
{
  "_id": "62169d74d38a2a4e6a35b57b",
  "name": "CR7",
  "position": "forward",
  "club": {
    "_id": "6213f0afb7fba2571508a9b4",
    "name": "Man United",
    "country": "England",
    "__v": 0
  },
  "__v": 0
}
```

___

**Path**: `players/:id`

**Method**: `DELETE`

**Body**: `no body`

**Sample Response**: `status 200 | 400`
