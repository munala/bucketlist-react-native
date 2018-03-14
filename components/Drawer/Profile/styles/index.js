import { StyleSheet, Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#00bcd4',
    justifyContent: 'flex-start',
    paddingBottom: height === 812 && Platform.OS === 'ios' ? 20 : 0,
    width: '100%',
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingTop: 20,
    paddingBottom: 2,
    zIndex: 5,
  },
  profilePicWrapper: {
    display: 'flex',
    borderWidth: 2,
    borderColor: '#f7f7f7',
    overflow: 'hidden',
  },
  profilePic: {
    flex: 1,
    height: null,
    width: null,
  },
  profileName: {
    display: 'flex',
    color: '#F7F7F7',
    height: 24,
    fontSize: 24,
    marginVertical: 10,
  },
  profileEmail: {
    display: 'flex',
    color: '#F7F7F7',
    height: 16,
    fontSize: 16,
    marginVertical: 10,
  },
  profileAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 30,
    width: 200,
    backgroundColor: '#f7f7f7',
    marginVertical: 10,
  },
  profileActionText: {
    display: 'flex',
    color: '#00bcd4',
  },
  profileStats: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    height: 50,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#f7f7f7',
    backgroundColor: '#00bcd4',
    marginHorizontal: 10,
    marginTop: 10,
  },
  stat: {
    display: 'flex',
    flexBasis: '50%',
    alignItems: 'stretch',
    height: Platform.OS === 'ios' ? '100%' : 48,
    borderRadius: 2,
  },
  statActive: {
    backgroundColor: '#f7f7f7',
  },
  statWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statCount: {
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    color: '#f7f7f7',
    fontSize: 20,
  },
  statCountActive: {
    color: '#00bcd4',
  },
  statLabel: {
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    color: '#f7f7f7',
    fontSize: 12,
  },
  statLabelActive: {
    color: '#00bcd4',
  },
  profileBody: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    margin: 10,
    borderRadius: 5,
    paddingVertical: 10,
    backgroundColor: '#f7f7f7',
  },
  person: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    marginHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  lastPerson: {
    borderBottomWidth: 0,
  },
  personPic: {
    display: 'flex',
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  personName: {
    display: 'flex',
    color: 'grey',
    flexBasis: '60%',
    fontSize: 12,
    fontWeight: 'bold',
  },
  personAction: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    width: 70,
    height: 30,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#00bcd4',
  },
  removeAction: {
    backgroundColor: '#00bcd4',
  },
  actionText: {
    display: 'flex',
    textAlign: 'center',
    fontSize: 12,
    color: '#00bcd4',
    fontWeight: 'bold',
  },
  removeActionText: {
    color: '#f7f7f7',
  },
});
