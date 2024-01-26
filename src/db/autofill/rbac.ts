import { Tables } from "../types/tables";
import { RBACColumns } from "../types/tableColumns/rbac";

const autofillRBACQuery = `
    insert into ${Tables.rbac} (${RBACColumns.user_id}, ${RBACColumns.role_id})
    values 
        (0, 3)
    on conflict do nothing;
`;

export default autofillRBACQuery;
