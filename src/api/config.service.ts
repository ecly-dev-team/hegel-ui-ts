import { GlobalConfig } from '@/interface/global-config.interface';
import { HOST_ADDRESS } from './api';
import axios from 'axios';

export async function fetchGlobalConfig(): Promise<GlobalConfig> {
  const res = await axios.get(HOST_ADDRESS + '/config');
  return res.data as GlobalConfig;
}
