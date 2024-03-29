import { Tables } from "../types/tables";
import { RolesColumns } from "../types/tableColumns/roles";
import { AccessLevel } from "../types/customTypes";

const autofillRolesQuery = `
    insert into ${Tables.roles} (${RolesColumns.id}, ${RolesColumns.title}, ${RolesColumns.access_level})
    values 
        (1, 'User', ${AccessLevel.USER}),
        (2, 'Merchant', ${AccessLevel.MERCHANT}),
        (3, 'Courier', ${AccessLevel.COURIER})
    on conflict do nothing;
`;

export default autofillRolesQuery;
