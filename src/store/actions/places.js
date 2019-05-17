/**
 * @format
 * @flow
 */
import type { Action, Location } from '@/types/store';

import { ADD_PLACE, DELETE_PLACE } from '@/store/actions/actionTypes';

export const addPlace = (placeName: string, location: Location): Action => {
  return {
    type: ADD_PLACE,
    placeName,
    location,
  };
};

export const deletePlace = (key: string): Action => {
  return {
    type: DELETE_PLACE,
    placeKey: key,
  };
};
