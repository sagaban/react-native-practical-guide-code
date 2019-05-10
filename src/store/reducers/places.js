/**
 * @format
 * @flow
 */
import type { State, Action } from '@/types/store';

import { ADD_PLACE, DELETE_PLACE } from '@/store/actions/actionTypes';

const initialState: State = {
  places: [],
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          value: action.placeName,
          image: {
            uri: `https://picsum.photos/id/${Math.floor(Math.random() * 900 + 100)}/300/200`,
          },
          key: `${Math.random()}`, // not ideal, can be repeated
        }),
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(p => p.key !== action.placeKey),
      };
    default:
      return state;
  }
};

export default reducer;
