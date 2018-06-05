/* eslint-disable no-nested-ternary */
import React from 'react';
import {
  View,
  Animated,
  ActivityIndicator,
  Platform,
} from 'react-native';

import BaseClass from './BaseClass2';
import ProfileBody from './ProfileBody';
import Header from '../../../containers/Header';
import propTypes from './propTypes';
import styles from './styles';

class Profile extends BaseClass {
  state = {
    activeType: 'Followers',
    scrollY: new Animated.Value(0),
    uploadingImage: false,
    scrollEnabled: true,
    editMode: false,
    image: null,
    uploading: false,
    profile: { ...this.props.profile },
    fromRoute: this.props.fromRoute,
  }

  componentDidMount = () => {
    if (!this.props.profile.id) {
      this.props.actions.getProfile();
    }
  };

  componentDidUpdate = ({ error, profile }) => {
    if (!error && this.props.profile !== profile) {
      this.setState({
        profile,
      });
    }
  }

  render() {
    const {
      activeType, scrollEnabled, editMode, uploading, scrollY,
    } = this.state;

    const {
      profile,
      currentApiCalls,
      otherProfile,
      fromRoute: from,
    } = this.props;

    const showUserProfile = !!from && otherProfile.id !== profile.id;
    const avatar = showUserProfile ? otherProfile.pictureUrl : this.state.profile.pictureUrl;

    const height = this.state.scrollY.interpolate({
      inputRange: [0, 5],
      outputRange: [editMode ? 75 : 100, 0],
      extrapolate: 'clamp',
      useNativeDriver: true,
    });
    const marginTop = this.state.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [0, -160],
      extrapolate: 'clamp',
    });
    const formHeight = this.animationFactor.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 300],
    });
    const opacity = this.animationFactor.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    });

    const listHeight = 60 * (
      showUserProfile ? otherProfile : profile
    )[activeType.toLowerCase()]
      .length;

    const [firstName, lastName] = (this.state.profile.displayName || '').split(' ');
    const displayName = {};
    displayName['first name'] = firstName;
    displayName['last name'] = lastName;

    const editProfileProps = {
      uploading,
      formHeight,
      changePhoto: this.changePhoto,
      displayName,
      onChange: this.onChange,
      cancel: this.cancel,
      profile,
      avatar,
      onSave: this.onSave,
    };

    const profileBodyProps = {
      marginTop,
      height,
      opacity,
      profile: showUserProfile ? otherProfile : profile,
      editProfileProps,
      openEditProfileMode: this.openEditProfileMode,
      renderStats: this.renderStats,
      renderPeople: this.renderPeople,
      activeType,
      scrollEnabled,
      listHeight,
      scrollY,
      avatar,
      showUserProfile,
      isFriend: this.isFriend,
      sendMessage: this.sendMessage,
      removeFriend: this.props.actions.removeFriend,
      addFriend: this.props.actions.addFriend,
    };

    return (
      <View style={styles.container}>
        <Header
          title="Profile"
          leftIcon={from ? (Platform.OS === 'ios' ? 'chevron-left' : 'arrow-back') : 'menu'}
          onPressLeft={from ? this.goBack : () => this.props.actions.navigate({ route: 'DrawerOpen', navigator: 'DrawerNav' })}
          mode="profile"
        />
        {currentApiCalls > 0 && !this.state.uploading &&
          <View style={styles.activity}>
            <ActivityIndicator color="#fff" size="large" />
          </View>
        }
        <ProfileBody {...profileBodyProps} />
      </View>
    );
  }
}

Profile.propTypes = propTypes;

export default Profile;