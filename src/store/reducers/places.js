/**
 * @format
 * @flow
 */
import type { State, Action } from '@/types/store';

import {
  ADD_PLACE,
  DELETE_PLACE,
  SELECT_PLACE,
  DESELECT_PLACE,
} from '@/store/actions/actionTypes'

const initialState : State = {
    places: [],
    selectedPlace: null
}
const reducer = (state: State = initialState, action: Action) : State => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          value: action.placeName,
          image: {
            uri: `https://picsum.photos/id/${Math.floor(Math.random()*900+100)}/300/200`,
          },
          key: `${Math.random()}`, // not ideal, can be repeated
        }),
      };
    case DELETE_PLACE:
      const key = state.selectedPlace ? state.selectedPlace.key : null;
      return key ? {
        ...state,
        places: state.places.filter(p => p.key !== key),
        selectedPlace: null,
      } : state;
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find(p => p.key === action.placeKey),
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null,
      };
    default:
      return state;
  }
};

export default reducer;
