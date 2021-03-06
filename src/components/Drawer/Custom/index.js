import React from 'react';
import { View } from 'react-native';

import DrawerItems from './DrawerItems';
import Text from '../../Common/SuperText';
import Account from './Account';
import styles from './styles';

const CustomDrawer = props => (
  <View style={styles.container}>
    <View>
      <Account />
      <DrawerItems {...props} />
    </View>
    <Text style={styles.copyright}>© 2019 Oliver Munala</Text>
  </View>
);

export default CustomDrawer;
