import React from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import { View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

import styles from '../../styles/';
import Text from '../../../../Common/SuperText';

const CardContent = ({
  bucketlist,
  imageDimensions,
  setLikeColor,
  profile,
  like,
  toggleItems,
  toggleComments,
  goToBucketlist,
  openMenu,
  mode,
}) => (
  <TouchableWithoutFeedback
    onPress={goToBucketlist}
    onLongPress={() => openMenu(bucketlist, 'showMenu')}
    delayLongPress={500}
  >
    <View>
      <View style={styles.description}>
        <View>
          <Text
            selectable
            numberOfLines={mode ? undefined : 1}
            style={styles.blue}
          >{bucketlist.name}</Text>
          {
            !!bucketlist.description &&
            <Text
              numberOfLines={mode ? undefined : 4}
              selectable
              style={styles.grey}
            >{bucketlist.description}</Text>
          }
        </View>
      </View>
      {!!bucketlist.pictureUrl &&
        <Image
          indicator={Progress.Pie}
          color="#fff"
          resizeMethod="resize"
          source={{
            uri: (
              bucketlist.pictureUrl.replace(
                (bucketlist.pictureUrl.includes('https://') ? 'https://' : 'http://'),
                'https://',
              )
            ),
          }}
          style={[styles.image, imageDimensions]}
        />
      }
      <View style={styles.likesComments}>
        <View style={[styles.likesComments, { width: 100, justifyContent: 'flex-start' }]}>
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => like(bucketlist)}
            hitSlop={{
              top: 10, left: 10, bottom: 10, right: 10,
            }}
          >
            <Icon name="star" size={20} color={setLikeColor(bucketlist, profile)} />
          </TouchableOpacity>
          {
            !!bucketlist.likes && bucketlist.likes.length > 0 &&
            <Text style={styles.span}>
              {bucketlist.likes.length}
            </Text>
          }
        </View>
        <View style={[styles.likesComments, { width: 100, justifyContent: 'center' }]}>
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => toggleItems(bucketlist)}
            hitSlop={{
              top: 10, left: 10, bottom: 10, right: 10,
            }}
          >
            <Icon name="list" size={20} color="grey" />
          </TouchableOpacity>
          {
            !!bucketlist.items && bucketlist.items.length > 0 &&
            <Text style={styles.span}>
              {bucketlist.items.length}
            </Text>
          }
        </View>
        <View style={[styles.likesComments, { width: 100, justifyContent: 'flex-end' }]}>
          <TouchableOpacity
            style={styles.iconStyle}
            onPress={() => toggleComments(bucketlist)}
            hitSlop={{
              top: 10, left: 10, bottom: 10, right: 10,
            }}
          >
            <Icon name="comment" size={20} color="grey" />
          </TouchableOpacity>
          {
            !!bucketlist.comments && bucketlist.comments.length > 0 &&
            <Text style={styles.span}>
              {bucketlist.comments.length}
            </Text>
          }
        </View>
      </View>
    </View>
  </TouchableWithoutFeedback>
);

CardContent.propTypes = {
  bucketlist: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      done: PropTypes.bool,
    })),
    comments: PropTypes.arrayOf(PropTypes.shape({
      content: PropTypes.string,
      id: PropTypes.string,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
    })),
  }).isRequired,
  mode: PropTypes.string,
  imageDimensions: PropTypes.shape({}).isRequired,
  setLikeColor: PropTypes.func.isRequired,
  like: PropTypes.func.isRequired,
  toggleItems: PropTypes.func.isRequired,
  toggleComments: PropTypes.func.isRequired,
  goToBucketlist: PropTypes.func.isRequired,
  openMenu: PropTypes.func.isRequired,
  profile: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    displayName: PropTypes.string,
    email: PropTypes.string,
    pictureUrl: PropTypes.string,
    friends: PropTypes.arrayOf(PropTypes.shape({})),
    searchUsers: PropTypes.arrayOf(PropTypes.shape({})),
  }).isRequired,
};

CardContent.defaultProps = {
  mode: '',
};

export default CardContent;
