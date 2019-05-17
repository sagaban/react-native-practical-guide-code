/**
 * @format
 * @flow
 */

export type Location = {
  latitude: number,
  longitude: number,
};

export type Item = {
  value: string,
  key: string,
  image: {
    uri: string,
  },
  location: Location,
};

export type Places = Array<Item>;

export type State = {
  places: Places,
};

// Maybe `type Action = { type: string; payload: Object };`
export type Action = {
  +type: string,
} & Object;
