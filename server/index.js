import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

import {
  GRPC_HOST,
  PROTOFILE_PATHS,
  PROTO_FILE_LOAD_OPTIONS,
} from "./config.js";
const packageDefinitions = protoLoader.loadSync(
  PROTOFILE_PATHS,
  PROTO_FILE_LOAD_OPTIONS
);
const packages = grpc.loadPackageDefinition(packageDefinitions);

const authorService = packages.com.dvs.AuthorService.service;

const grpcServer = new grpc.Server();

grpcServer.addService(authorService, {
  getAllAuthors: (call, callback) => {
    return callback(null, { authors: [] });
  },
});

grpcServer.bindAsync(
  GRPC_HOST,
  grpc.ServerCredentials.createInsecure(),
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`Server running at ${GRPC_HOST}`);
    // grpcServer.start();
  }
);
