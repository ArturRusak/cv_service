import { CreateWordDto } from './create-word.dto';

export class UpdateWordDto extends CreateWordDto{
  readonly id: string;
}