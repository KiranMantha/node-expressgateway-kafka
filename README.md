# node-expressgateway-kafka

Event-driven Microservices with nestjs, Kafka

## Install kafka

- download kafka tar file from [official site](https://kafka.apache.org/documentation/#quickstart)
- extract the downloaded tar file and `cd` to that location
- run zookeeper through `bin/zookeeper-server-start.sh config/zookeeper.properties`
- once zookeeper is up and running, in another terminal execute `bin/kafka-server-start.sh config/server.properties` to start kafka
- once kafka is up and running, it need to have one topic before consuming it to emit and read events. for this in a new terminal execute `bin/kafka-topics.sh --create --topic quickstart-events --bootstrap-server localhost:9092`
- this will create a topic named `quickstart-events`
- to list out all the topics, execute `bin/kafka-topics.sh --bootstrap-server localhost:9092 --list`

## Install mongodb

- https://medium.com/create-a-clocking-in-system-on-react/creating-a-local-mongodb-database-and-insert-a-document-c6a4a2102a22

- run below commands:

```bash
brew tap mongodb/brew
```

```bash
brew install mongodb-community
```

- after installation, to start mongodb, run `brew services start mongodb-community`.
- to check this: install mongodb vscode extension and add a connection with connection string: `mongodb://localhost`.
- to stop mongodb, run `brew services stop mongodb-community`.

## Start application

Folder structure:

```
root/
├── api-gateway (express endpoint)
├── billing (kafka MS)
└── users (kafka MS)
```

- once kafka is up and running, cd to `api-gateway`
- run `yarn start`
