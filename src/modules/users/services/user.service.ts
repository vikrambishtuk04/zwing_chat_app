import { Injectable } from '@nestjs/common';
import { ResponseDto } from 'src/common/dto/ResponeDto';
import { getDb } from 'db/config';
import { vendorUsers, VendorUser, vendorRoles, vendorRoleUserMapping } from 'db/schema';
import { eq } from 'drizzle-orm';
import { UserListResponse } from '../dto/UserResponseDto';
@Injectable()
export class UserService {

  async getUserList(): Promise<ResponseDto<UserListResponse[]>> {
    const db = await getDb();
    const userList = await db.select({
      id: vendorUsers.id,
      name: vendorUsers.first_name,
      status: vendorUsers.status,
      email: vendorUsers.email,
      role_name: vendorRoles.name,
    })
    .from(vendorUsers)
    .leftJoin(
      vendorRoleUserMapping,
      eq(vendorUsers.id, vendorRoleUserMapping.user_id)
    )
    .leftJoin(
      vendorRoles,
      eq(vendorRoleUserMapping.role_id, vendorRoles.id)
    )
    .where(eq(vendorUsers.status, '1'));
    return new ResponseDto<UserListResponse[]>(
      'success',
      'users fetched successfully',
      userList,
    );
  }
}
