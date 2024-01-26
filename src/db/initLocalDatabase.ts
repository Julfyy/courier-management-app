import {
  createRBACQuery,
  createRolesQuery,
  createUsersQuery
} from "./dbQueries";
import { getInstanceByToken } from "fastify-decorators";
import { DB, DBToken } from "./DBService";

export const initLocalDatabaseIfNotExists = async () => {
  const queryToExecute = `
    ${createUsersQuery}
    ${createRolesQuery}
    ${createRBACQuery}
    `;
  await getInstanceByToken<DB>(DBToken).executeQuery(queryToExecute);
};
