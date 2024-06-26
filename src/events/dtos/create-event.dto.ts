import { IsDateString, IsString, Length } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @Length(1, 255, { message: 'The name length is wrong' })
  name: string;
  @Length(5, 255, { message: 'The description length is wrong' })
  description: string;
  @IsDateString()
  when: string;
  @Length(5, 255, { groups: ['create'] })
  @Length(10, 20, { groups: ['update'] })
  address: string;
}
