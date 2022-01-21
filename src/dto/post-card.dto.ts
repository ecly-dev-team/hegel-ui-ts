import { TagDto } from './tag.dto';

export interface PostCardDto {
  id: number;
  title: string;
  abstract: string;
  tags: Array<TagDto>;
}
