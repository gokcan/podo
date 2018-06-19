// @flow

import React, { Component } from 'react';
import {
	View,
	Button,
	Text,
	ActivityIndicator,
	TextInput,
	FlatList,
	Image,
	StatusBar,
	TouchableOpacity
} from 'react-native';
import styles from './styles';

type Props = {
	error: boolean,
	isLoading: boolean,
	templateInfo: Object,
	fetchData: Function
};

export default class HomePage extends Component<Props> {
	constructor(props) {
		super(props);
	}

	static navigationOptions = { title: 'Home', header: null };

	componentWillMount() {
		const { fetchData } = this.props;
		StatusBar.setHidden(true);
		fetchData();
	}

	getErrorMessage() {
		return <Text style={styles.errorText}>Uppps.. Something went wrong.</Text>;
	}

	getItemSeparator() {
		return (
			<View
				style={{
					height: 1,
					width: '100%',
					backgroundColor: '#f6f6f6'
				}}
			/>
		);
	}

	getRowItem = (item) => {
		const uri = 'https:' + item.screenshot;
		return (
			<TouchableOpacity onPress={() => this.onPress(item)}>
				<View style={{ flex: 1, flexDirection: 'row', margin: 4 }}>
					<Image style={{ width: 140, height: 164 }} source={{ uri }} />
					<View style={{ flex: 1, flexDirection: 'column', marginLeft: 4 }}>
						<Text style={styles.titleText}>{item.title}</Text>
						<Text style={styles.templateInfoText}>{item.description}</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	onPress = (item) => {
		this.props.navigation.navigate('FormPreview', {
			title: item.title,
			_title: item._title
		});
	};

	render() {
		const { isLoading, error, fetchData, templateInfo } = this.props;
		const header = 'Jotform Form Templates';

		return (
			<View style={styles.container}>
				{isLoading ? <ActivityIndicator /> : null}
				{error ? this.getErrorMessage() : null}
				<View style={{ flex: 0.07 }}>
					<Text
						style={{
							color: '#f7f7f7',
							fontSize: 24,
							textAlign: 'center',
							fontWeight: 'bold',
							fontFamily: 'Futura'
						}}
					>
						{header}
					</Text>
				</View>
				<FlatList
					data={templateInfo.data}
					ItemSeparatorComponent={this.getItemSeparator}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					keyExtractor={(item, index) => item.id}
					renderItem={({ item }) => this.getRowItem(item)}
				/>
			</View>
		);
	}
}
