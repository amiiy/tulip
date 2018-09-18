module.exports = {
  mongodb: {
    host: process.env.MONGO_HOST || "localhost",
    port: process.env.MONGO_PORT || 27017,
    name: process.env.MONGO_DATABASE || "tehran",
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    replicaSet: process.env.REPLICA_SET || "rs0",
    get connectionString() {
      if (this.user && this.pass) {
        return `mongodb://${this.user}:${this.pass}@${this.host}:${this.port}/${
          this.name
        }`;
      }

      return `mongodb://${this.host}:${this.port}/${this.name}`;
    }
  },
  app: {
    port: process.env.PORT || 3000
  }
};
