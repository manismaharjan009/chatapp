import React, {Component} from 'react';
import moment from 'moment';
import {
	ListView,
	Text,
	Row,
	Image,
	View,
	Subtitle,
	Caption,
	Heading
} from 'react-native';

const Message = ({msg}) => (
	<Row>
		<Image styleName="small-avatar top" source={{uri: msg.author.avatar}} />
		<View styleName="vertical">
			<View styleName="horizontal space-between">
				<Subtitle>{msg.author.name}</Subtitle>
				<Caption>{moment(msg.time).from(Date.now())}</Caption>
			</View>
			<Text styleName="multiline">{msg.text}</Text>
		</View>
	</Row>
);

const MessageList = ({messages, onLayout}) => (
	<ListView data={messages} 
						autoHideHeader= {true}
						renderRow={msg => <Message msg={msg} />}
						onLayout={onLayout}
	/>
);

export default MessageList;