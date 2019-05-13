/**
 * @format
 * @flow
 */
import React from 'react';
import DefaultInput from '@/components/UI/DefaultInput/DefaultInput';

type Props = {
  placeName: string,
  onChangeText: Function,
};

const placeInput = (props: Props) => {
  return (
    <DefaultInput
      placeholder="Place name"
      value={props.placeName}
      onChangeText={props.onChangeText}
    />
  );
};

export default placeInput;
