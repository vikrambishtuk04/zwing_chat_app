import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';
// import { HydratedDocument } from 'mongoose';

// export type UserDocument = HydratedDocument<User>;
//Defines the schema only
@Schema({ versionKey: false })
export class User {
  @Prop()
  name: string;

  @Prop({ unique: true, required: true })
  mobile: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ unique: true, required: true })
  username: string;

  @Prop()
  store_allocation_type: string;

  @Prop()
  role: string;

  @Prop()
  allocateStore: string;

  @Prop()
  status: string;

  @Prop({ unique: true })
  vu_id: number;

  @Prop()
  createdat: Date;

  @Prop()
  updatedat: Date;
}
//actual schema creation takes place here
export const userSchema = SchemaFactory.createForClass(User);
