import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Header from '../../Common/Header';
import SearchResults from '../../Common/SearchResults';
import HomeScreen from './Bucketlists';
import Messages from './Messages';
import Notifications from './Notifications';
import UserAlerts from './UserAlerts';
import styles from './styles';

class Home extends Component {
  state = {
    searchMode: false,
  }

  handleResults=(text) => {
    this.setState({
      searchMode: !!text,
    });
  }

  render() {
    const {
      navigation,
      nav: navigate,
    } = this.props;
    const Tabs = TabNavigator({
      Home: {
        screen: (() => (
          <HomeScreen
            navigation={navigation}
            imageHeights={this.state.imageHeights}
            handleHeader={this.handleHeader}
            nav={navigate}
          />
        )),
      },
      Messages: {
        screen: Messages,
      },
      UserAlerts: {
        screen: UserAlerts,
      },
      Notifications: {
        screen: Notifications,
      },
    },
    {
      tabBarOptions: {
        activeTintColor: '#00bcd4',
        inactiveTintColor: 'gray',
        showIcon: true,
        showLabel: false,
        style: {
          backgroundColor: 'white',
          marginTop: 0,
        },
        indicatorStyle: {
          backgroundColor: '#00bcd4',
        },
      },
      navigationOptions: ({ navigation: nav }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = nav.state;
          const names = {
            Home: 'home',
            Messages: 'message',
            UserAlerts: 'person-add',
            Notifications: 'notifications',
          };
          return <Icon name={names[routeName]} size={focused ? 25 : 20} color={tintColor} />;
        },
      }),
    },
    );
    return (
      <View style={[styles.container, styles.iPhoneX]}>
        <Header
          title="Home"
          leftIcon="menu"
          onPressLeft={() => navigation.navigate('DrawerOpen')}
          mode="bucketlists"
          navigation={navigation}
          navigate={navigate}
          handleResults={this.handleResults}
        />
        {
          this.state.searchMode ?
            <SearchResults
              onItemPress={() => {}}
            /> :
            <Tabs />
        }
      </View>
    );
  }
}

Home.propTypes = {
  // conversations: PropTypes.arrayOf(PropTypes.shape({
  //   username: PropTypes.string,
  //   displayName: PropTypes.string,
  //   email: PropTypes.string,
  //   pictureUrl: PropTypes.string,
  // })).isRequired,
  // notifications: PropTypes.arrayOf(PropTypes.shape({
  //   type: PropTypes.string,
  //   bucketlistId: PropTypes.number,
  //   text: PropTypes.string,
  // })).isRequired,
  // alerts: PropTypes.arrayOf(PropTypes.shape({
  //   type: PropTypes.string,
  //   userId: PropTypes.number,
  //   friendId: PropTypes.number,
  //   text: PropTypes.string,
  // })).isRequired,
  // profile: PropTypes.shape({
  //   id: PropTypes.number,
  //   username: PropTypes.string,
  //   displayName: PropTypes.string,
  //   email: PropTypes.string,
  //   pictureUrl: PropTypes.string,
  //   friends: PropTypes.arrayOf(PropTypes.shape({})),
  //   searchUsers: PropTypes.arrayOf(PropTypes.shape({})),
  // }).isRequired,
  // bucketlists: PropTypes.arrayOf(PropTypes.shape({
  //   name: PropTypes.string,
  //   id: PropTypes.number,
  //   createdAt: PropTypes.string,
  //   updatedAt: PropTypes.string,
  //   description: PropTypes.string,
  //   items: PropTypes.arrayOf(PropTypes.shape({
  //     name: PropTypes.string,
  //     id: PropTypes.number,
  //     createdAt: PropTypes.string,
  //     updatedAt: PropTypes.string,
  //     done: PropTypes.bool,
  //   })),
  //   comments: PropTypes.arrayOf(PropTypes.shape({
  //     content: PropTypes.string,
  //     id: PropTypes.number,
  //     createdAt: PropTypes.string,
  //     updatedAt: PropTypes.string,
  //   })),
  // })).isRequired,
  // actions: PropTypes.shape({
  //   loadAllBucketlists: PropTypes.func.isRequired,
  //   logout: PropTypes.func.isRequired,
  //   search: PropTypes.func.isRequired,
  //   clearSearch: PropTypes.func.isRequired,
  // }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired,
    state: PropTypes.shape({}).isRequired,
  }).isRequired,
  nav: PropTypes.func.isRequired,
};

export default Home;