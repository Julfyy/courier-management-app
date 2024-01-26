import { Tables } from "../../../db/types/tables";
import { RBACColumns } from "../../../db/types/tableColumns/rbac";
import { AccessLevel } from "../../../db/types/customTypes";

export const setBasicRoleQuery = (userId: number) => {
  return `INSERT INTO ${Tables.rbac} 
            (${RBACColumns.user_id}, ${RBACColumns.role_id}) 
        VALUES 
            (${userId}, 0, ${AccessLevel.USER})`;
};
