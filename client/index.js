import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";

import {
  GRPC_HOST,
  PROTOFILE_PATHS,
  PROTO_FILE_LOAD_OPTIONS,
} from "./config.js";
import { AuthorService } from "./services/author.service.js";
const packageDefinitions = protoLoader.loadSync(
  PROTOFILE_PATHS,
  PROTO_FILE_LOAD_OPTIONS
);
const packages = grpc.loadPackageDefinition(packageDefinitions);

const authorService = packages.com.dvs.AuthorService(GRPC_HOST,grpc.credentials.createInsecure());



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
