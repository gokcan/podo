/* @flow */
import React from 'react';
import { Text } from 'react-native';
import styles from './styles-global';

const ErrorMessage = e => <Text style={styles.errorText}>{e}</Text>;

export default ErrorMessage;
