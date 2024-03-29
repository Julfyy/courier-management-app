import fastifyLoggerOptions from "./server/options/fastifyLoggerOptions";
import swaggerOptions from "./server/options/swaggerOptions";
import fastifyCookie from "@fastify/cookie";
import fastifyCors from "@fastify/cors";
import fastifySwagger from "@fastify/swagger";
import fastify from "fastify";
import Server from "./server/index";
import fastifyCorsOptions from "./server/options/fastifyCorsOptions";
import fastifyCookieOptions from "./server/options/fastifyCookieOptions";
import fastifyRequestTracerOptions from "./server/options/fastifyRequestTracerOptions";
import * as rTracer from "cls-rtracer";
import fastifyMultipart from "@fastify/multipart";
import { UserController } from "./modules/users/routers/controller";
import fastifyMultipartOptions from "./server/options/fastifyMultipartOptions";
import fastifyStatic from "@fastify/static";
import fastifyStaticOptions from "./server/options/fastifyStaticOptions";

const server = new Server(
  fastify({
    logger: fastifyLoggerOptions,
  })
);
server.registerPlugin({
  pluginInstance: fastifySwagger,
  options: swaggerOptions,
});
server.registerPlugin({
  pluginInstance: fastifyCors,
  options: fastifyCorsOptions,
});
server.registerPlugin({
  pluginInstance: fastifyCookie,
  options: fastifyCookieOptions,
});
server.registerPlugin({
  pluginInstance: rTracer.fastifyPlugin,
  options: fastifyRequestTracerOptions,
});
server.registerPlugin({
  pluginInstance: fastifyMultipart,
  options: fastifyMultipartOptions,
});
server.registerPlugin({
  pluginInstance: <any>fastifyStatic,
  options: fastifyStaticOptions,
});
server.registerPlugins();
server.registerControllers([
  UserController,
]);
server.findReferencesSchemas();
server.addReferencesSchemas();
server.registerErrorHandler();

export default server;
