/* @flow */
import { AsyncStorage } from 'react-native';

export const loadState = async () => {
  try {
    const serialized = await AsyncStorage.getItem('state');
    return serialized ? JSON.parse(serialized) : undefined;
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`Could not be able to getItem(), caused by ${error}`);
    }
    return undefined;
  }
};

export const saveState = async (state) => {
  try {
    if (state) {
      const serialized = JSON.stringify(state);
      await AsyncStorage.setItem('state', serialized);
    }
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(`Could not be able to setItem(), caused by ${error}`);
    }
  }
};
