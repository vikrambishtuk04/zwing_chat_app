import { Injectable } from '@nestjs/common';
import { ResponseDto } from 'src/common/dto/ResponeDto';
import { getDb } from 'db/config';
import {
  vendorUsers,
  vendorRoles,
  vendorRoleUserMapping,
} from 'src/modules/users/schema';
import { eq, and } from 'drizzle-orm';
import { UserListResponse } from '../dto/UserResponseDto';
@Injectable()
export class UserService {
  async getUserList(v_id: string): Promise<ResponseDto<UserListResponse[]>> {
    const db = await getDb();
    const userList = await db
      .select({
        id: vendorUsers.id,
        name: vendorUsers.first_name,
        status: vendorUsers.status,
        email: vendorUsers.email,
        role_name: vendorRoles.name,
      })
      .from(vendorUsers)
      .leftJoin(
        vendorRoleUserMapping,
        eq(vendorUsers.id, vendorRoleUserMapping.user_id),
      )
      .leftJoin(vendorRoles, eq(vendorRoleUserMapping.role_id, vendorRoles.id))
      .where(
        and(eq(vendorUsers.status, '1'), eq(vendorUsers.v_id, Number(v_id))),
      );
    return new ResponseDto<UserListResponse[]>(
      'success',
      'users fetched successfully',
      userList,
    );
  }
}
