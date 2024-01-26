import { Tables } from "./types/tables";
import { RBACColumns } from "./types/tableColumns/rbac";
import { RolesColumns } from "./types/tableColumns/roles";
import { UsersColumns } from "./types/tableColumns/users";


export const createRBACQuery = `create table if not exists ${Tables.rbac} (
        ${RBACColumns.user_id} integer not null,
        ${RBACColumns.role_id} integer not null,
        ${RBACColumns.created_at} timestamp not null default current_timestamp,
        ${RBACColumns.updated_at} timestamp not null default current_timestamp,
        PRIMARY KEY (${RBACColumns.user_id}, ${RBACColumns.role_id}),
        FOREIGN KEY (${RBACColumns.user_id}) REFERENCES ${Tables.users} (${UsersColumns.id}),
        FOREIGN KEY (${RBACColumns.role_id}) REFERENCES ${Tables.roles} (${RolesColumns.id})
);`;

export const createRolesQuery = `create table if not exists ${Tables.roles} (
    ${RolesColumns.id} serial primary key,
    ${RolesColumns.title} varchar(255) not null,
    ${RolesColumns.access_level} integer not null,
    ${RolesColumns.created_at} timestamp not null default current_timestamp,
    ${RolesColumns.updated_at} timestamp not null default current_timestamp
);`;

export const createUsersQuery = `create table if not exists ${Tables.users} (
    ${UsersColumns.id} serial primary key,
    ${UsersColumns.role_id} integer not null,
    ${UsersColumns.phone} varchar(255) not null,
    ${UsersColumns.email} varchar (255) not null,
    ${UsersColumns.password} varchar (255) not null,
    ${UsersColumns.created_at} timestamp not null default current_timestamp,
    ${UsersColumns.updated_at} timestamp not null default current_timestamp,
    FOREIGN KEY (${UsersColumns.role_id}) REFERENCES ${Tables.roles} (${RolesColumns.id})
);`;
