import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import mainStyles from '../../styles/main/mainStyles';
import loginStyles from '../../styles/login/loginStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../../utils/Nav';

class SportView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={loginStyles.mainContainer}>
        <View style={loginStyles.welcomeContainer}>
          <Text style={loginStyles.welcomeFont}>
            Sport
          </Text>
          <Icon name="rocket" size={30} color={mainStyles.themeColors.primary} />
          <TouchableHighlight onPress={() => navigate(this.props.navigator, 'exercise')}>
            <Text style={loginStyles.welcomeFont}>Go to Exercise</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default SportView;
