
# Proof Of Concept - Worker Threads

This project was built to test how to use the library worker threads for parallel processing. The full project contains two routes, one for a "Hello World" router and other for a counter to stress the system and block the processment. The counter route is running in a thread so the others routes can be used while counting the numbers.





## Stack used

**Back-end:** Node, Express, Typescript, Worker Threads library


## Instalation

First of all, you have to clone the repo in your machine and have NodeJS already installed.

Than you can enter the folder and execute the commands:


```bash
  npm install
  npm run start:dev
```
    
## API documentation

#### Returns a Hello World Message

```http
  GET /helloworld
```

#### Returns the result of the counter

```http
  GET /counter
```


