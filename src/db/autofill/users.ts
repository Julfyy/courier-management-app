import { Tables } from "../types/tables";
import { UsersColumns } from "../types/tableColumns/users";

const autofillUsersQuery = `
    insert into ${Tables.users} (${UsersColumns.id}, ${UsersColumns.phone}, ${UsersColumns.email}, ${UsersColumns.password}, ${UsersColumns.role_id})
    values
        (0, '+23423423', 'basic.user@gmail.com', 'F56RsnvsL8r5ut2dgY9B9Ao0JnDqCRKKFefeU5OTVso=', 1)
    on conflict do nothing;
  `;

export default autofillUsersQuery;
