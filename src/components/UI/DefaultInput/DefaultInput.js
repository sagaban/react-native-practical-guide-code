/**
 * @format
 * @flow
 */
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type Props = { isValid: ?boolean, isTouched: ?boolean } & Object;
const defaultInput = (props: Props) => {
  return (
    <TextInput
      underlineColorAndroid="transparent"
      {...props}
      style={[styles.input, props.style, !props.isValid && props.isTouched ? styles.invalid : null]}
    />
  );
};

defaultInput.defaultProps = {
  isValid: true,
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#eee',
    padding: 5,
    marginTop: 8,
    marginBottom: 8,
  },
  invalid: {
    backgroundColor: '#f9c0c0',
    borderColor: 'red',
  },
});

export default defaultInput;
