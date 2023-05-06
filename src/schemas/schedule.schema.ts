import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ScheduleDocument = Schedule & Document;

@Schema()
export class Schedule {
  @Prop()
  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  startTime: Date;

  @Prop({ required: true })
  endTime: Date;

  @Prop({ required: true })
  location: string;

  @Prop()
  notes: string;

  @Prop({ required: true, enum: ['one-time', 'recurring'] })
  scheduleType: string;

  @Prop()
  recurringDays?: string[];

  @Prop()
  recurringEndDate?: Date;

  @Prop()
  createdBy?: string;

  @Prop()
  updatedBy?: string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
