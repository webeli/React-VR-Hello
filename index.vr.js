import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';

class React_VR_Project extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor:'blue',
            padding: 0.02,
            textAlign:'center',
            textAlignVertical:'center',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            transform: [{translate: [0, 0, -3]}],
          }}>
          Hello Elias
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('React_VR_Project', () => React_VR_Project);
