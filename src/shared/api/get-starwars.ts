import { StarWarsModel } from '../models';
import { request } from './request';

export const getStarWars = (city: string): Promise<StarWarsModel> =>
  request<StarWarsModel>(city);
