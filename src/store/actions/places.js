/**
 * @format
 * @flow
 */
import type { Action } from '@/types/store';

import { ADD_PLACE, DELETE_PLACE } from '@/store/actions/actionTypes';

export const addPlace = (placeName: string): Action => {
  return {
    type: ADD_PLACE,
    placeName,
  };
};

export const deletePlace = (): Action => {
  return {
    type: DELETE_PLACE,
  };
};
