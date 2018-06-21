import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

type Props = {
  screenshot: string,
  description: string,
  title: string,
  onSelect: Object => void,
  item: Object
};

export default class FormListItem extends PureComponent<Props> {
  handleSelect = () => this.props.onSelect(this.props.item);

  render() {
    const { screenshot, title, description } = this.props;
    const uri = `https:${screenshot}`;

    return (
      <TouchableOpacity activeOpacity={0.9} onPress={this.handleSelect}>
        <View style={{ flex: 1, flexDirection: 'row', margin: 4 }}>
          <Image style={{ width: 140, height: 164 }} source={{ uri }} />
          <View style={{ flex: 1, flexDirection: 'column', marginLeft: 4 }}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.templateInfoText}>{description}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
