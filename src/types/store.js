/**
 * @format
 * @flow
 */

export type Item = {
  value: string,
  key: string,
  image: {
    uri: string,
  },
};

export type Places = Array<Item>;

export type State = {
  places: Places,
};

// Maybe `type Action = { type: string; payload: Object };`
export type Action = {
  +type: string,
} & Object;
