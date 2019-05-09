/**
 * @format
 * @flow
 */
import type { Action } from '@/types/store';

import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
} from '@/store/actions/actionTypes'

export const addPlace = (placeName : string) : Action => {
  return {
    type: ADD_PLACE,
    placeName
  }
}

export const deletePlace = () : Action => {
  return {
    type: DELETE_PLACE
  }
};

export const selectPlace = (key : string) : Action => {
  return {
    type: SELECT_PLACE,
    placeKey: key
  }
}
export const deselectPlace = () : Action => {
  return {
    type: DESELECT_PLACE,
  }
}
