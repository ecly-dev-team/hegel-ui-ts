import { Tag } from './tag.interface';

export interface PostCard {
  id: number;
  title: string;
  abstract: string;
  tags: Array<Tag>;
}
