import { GlobalConfig } from './global-config.interface';
import { PostCard } from './post-card.interface';

export interface State {
  globalConfig: null | GlobalConfig;
  postCardListAtHome: null | Array<PostCard>;
}
