import { PostCard } from '@/interface/post-card.interface';
import axios from 'axios';
import { HOST_ADDRESS } from './api';

export async function fetchPostCount(): Promise<number> {
  const res = await axios.get(HOST_ADDRESS + '/posts/count');
  return res.data.count as number;
}

export async function fetchPostCardListAtHome(
  limit: number,
  offset: number
): Promise<Array<PostCard>> {
  const res = await axios.get(
    HOST_ADDRESS + '/posts?offset=' + offset + '&limit=' + limit
  );
  return res.data as Array<PostCard>;
}
