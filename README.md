# Book-Library

# Overview

The project is based on two components:
- Spring Boot backend server
- Angular frontend server

# How to run

## Prerequisites

- `git`
- `java`
- `npm`
- `ng` command-line tool
- `mvn`
- `docker`

## Steps

Run a local database by using Docker:

`docker run --name postgres -p 5432:5432 -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=postgres -d postgres`

Execute the following steps in order to run the Spring Boot server:

1. `git clone https://github.com/VeronikaIR/Book-Library`
2. `cd Book-Library/spring-book-library`
3. `mvn clean install`
4. `cd target`
5. `java -jar spring-book-library-0.0.1-SNAPSHOT.jar`

> Backend server should now run at: http://localhost:8080

Execute the following steps in order to run the Angular server:

1. Go back to where the repository was cloned
2. `cd Book-Library/spring-book-library/src/main/resources/webapp/book-library-app`
3. `npm install`
4. `ng serve`

> Frontend server should now run at: http://localhost:4200

> Additionally you can import the Postman collection located at `Book-Library/Book Library.postman_collection.json` and manually make HTTP requests