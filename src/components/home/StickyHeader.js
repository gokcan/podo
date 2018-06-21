/* @flow */
import React from 'react';
import { View, Text } from 'react-native';

const StickyHeader = title => (
  <View style={{ flex: 1, backgroundColor: '#008891' }}>
    <Text
      style={{
        color: '#f7f7f7',
        fontSize: 30,
        padding: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Futura',
      }}
    >
      {title}
    </Text>
  </View>
);

export default StickyHeader;
