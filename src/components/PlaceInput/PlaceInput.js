/**
 * @format
 * @flow
 */
import React from 'react';
import DefaultInput from '@/components/UI/DefaultInput/DefaultInput';

type Props = {
  placeData: Object,
  onChangeText: Function,
};

const placeInput = (props: Props) => {
  return (
    <DefaultInput
      placeholder="Place name"
      value={props.placeData.value}
      isValid={props.placeData.isValid}
      isTouched={props.placeData.isTouched}
      onChangeText={props.onChangeText}
    />
  );
};

export default placeInput;
