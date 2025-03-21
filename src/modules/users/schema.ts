import { sql } from 'drizzle-orm';
import {
  mysqlTable,
  varchar,
  int,
  datetime,
  timestamp,
} from 'drizzle-orm/mysql-core';

export const vendorUsers = mysqlTable('vendor_auth', {
  id: int('id').primaryKey().autoincrement(),
  v_id: int('v_id'),
  employee_code: varchar('employee_code', { length: 100 }),
  sso_user_id: varchar('sso_user_id', { length: 65535 }),
  vendor_user_random: varchar('vendor_user_random', { length: 191 }),
  store_id: int('store_id'),
  gender: int('gender'),
  dob: datetime('dob'),
  approved_by_store: varchar('approved_by_store', { length: 2 }),
  is_active: int('is_active'),
  is_admin: int('is_admin'),
  otp: int('otp'),
  otp_send: int('otp_send'),
  api_token: varchar('api_token', { length: 255 }),
  device_name: varchar('device_name', { length: 255 }),
  os_name: varchar('os_name', { length: 255 }),
  os_version: varchar('os_version', { length: 100 }),
  udid: varchar('udid', { length: 255 }),
  imei: varchar('imei', { length: 255 }),
  latitude: varchar('latitude', { length: 255 }),
  longitude: varchar('longitude', { length: 255 }),
  device_model_number: varchar('device_model_number', { length: 255 }),
  login_vid: int('login_vid'),
  first_name: varchar('first_name', { length: 50 }),
  last_name: varchar('last_name', { length: 50 }),
  email: varchar('email', { length: 150 }),
  mobile: varchar('mobile', { length: 100 }),
  password: varchar('password', { length: 191 }),
  status: varchar('status', { length: 2 }),
  is_salesman: varchar('is_salesman', { enum: ['0', '1'] }),
  type: varchar('type', {
    enum: ['staff', 'salesman', 'manager', 'guard', 'supervisor', 'lp'],
  }),
  mobile_active: int('mobile_active'),
  email_active: varchar('email_active', { length: 2 }),
  remember_token: varchar('remember_token', { length: 255 }),
  deleted: int('deleted'),
  deleted_at: datetime('deleted_at'),
  created_at: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`),
  username: varchar('username', { length: 255 }),
  store_allocation_type: varchar('store_allocation_type', { enum: ['0', '1'] }),
  integration_config: varchar('integration_config', { length: 65535 }),
  created_by: int('created_by'),
  updated_by: int('updated_by'),
});

export const vendorRoles = mysqlTable('vendor_roles', {
  id: int('id').primaryKey().autoincrement(),
  v_id: int('v_id'),
  name: varchar('name', { length: 100 }),
  code: varchar('code', { length: 100 }),
  created_at: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`),
});

export const vendorRoleUserMapping = mysqlTable('vendor_role_user_mapping', {
  id: int('id').primaryKey().autoincrement(),
  user_id: int('user_id').references(() => vendorUsers.id),
  role_id: int('role_id').references(() => vendorRoles.id),
  created_at: timestamp('created_at').default(sql`CURRENT_TIMESTAMP`),
  updated_at: timestamp('updated_at').default(sql`CURRENT_TIMESTAMP`),
});
