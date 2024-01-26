import { FastifyReply, FastifyRequest } from "fastify";
import { AsyncResource } from "async_hooks";
import AsyncStorageMap from "../asyncStorage";
import { resolvePromise } from "../asyncStorage/resolvePromise";
import logger from "../../../../server/utils/logger";
import { AuthorizationHookResponse } from "../asyncStorage/types";
import { ForbiddenError } from "../../../../server/utils/common/errors/error";

export const authorizeUserHook = (
  req: FastifyRequest,
  res: FastifyReply,
  done: any
) => {
  resolvePromise(async (): Promise<AuthorizationHookResponse | undefined> => {
    logger.info(req.routerPath, "Authorization User Hook Router Path");
    try {
      const userId = Number(req.cookies["id"]);
      if (!userId)
        throw new ForbiddenError(
          "User id is not provided",
          "authorizeUserHook"
        );
      const user = {
        id: userId,
      };
      logger.info(
        {
          userId: user.id,
        },
        "Authorization User Hook Info"
      );
      return { userId: user.id};
    } catch (error) {
      done(error as ForbiddenError);
    }
  }).then((value) => {
    if (value) {
      AsyncStorageMap.initStorage(
        () => {
          const asyncResource = new AsyncResource("async-context");
          asyncResource.runInAsyncScope(done);
        },
        {
          userId: value.userId,
        }
      );
    }
  });
};
