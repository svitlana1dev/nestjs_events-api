import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Profile } from './../auth/profile.entity';
import { User } from './../auth/user.entity';
import { Attendee } from './../events/attendee.entity';
import { Event } from './../events/event.entity';
import { Subject } from './../school/subject.entity';
import { Teacher } from './../school/teacher.entity';
import { Course } from './../school/course.entity';

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: test(),
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Event, Attendee, User, Profile, Subject, Teacher, Course],
    synchronize: true,
    dropSchema: Boolean(parseInt(process.env.DB_DROP_SCHEMA)),
  }),
);

const test = () => {
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_PORT);
  console.log(process.env.DB_USER);
  console.log(process.env.DB_PASSWORD);
  console.log(process.env.DB_NAME);
  return process.env.DB_HOST;
};
