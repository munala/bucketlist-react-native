import { StyleSheet, Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bcd4',
    justifyContent: 'flex-start',
  },
  iPhoneX: {
    paddingBottom: height === 812 && Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#fff',
  },
  bucketlistRow: {
    flex: 1,
    margin: 10,
  },
  image: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 10,
    backgroundColor: 'grey',
  },
  empty: {
    height: 40,
    margin: 20,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#f7f7f7',
  },
  modal: {
    backgroundColor: '#f7f7f7',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    marginTop: -20,
  },
  inputStyle: {
    paddingBottom: 3,
    width: '100%',
  },
  otherField: {
    width: '100%',
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 5,
  },
  dialog: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    marginLeft: 20,
    marginRight: 20,
  },
  profileAvatar: {
    flexBasis: '10%',
    maxWidth: 40,
  },
  displayName: {
    flexBasis: '90%',
    marginLeft: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 20,
    color: 'grey',
  },
  newBucketlist: {
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    paddingTop: 20,
    padding: 20,
    margin: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    color: 'grey',
  },
  grid: {
    display: 'flex',
    flex: 1,
  },
  bucketlist: {
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    paddingTop: 20,
    paddingBottom: 10,
    marginHorizontal: 5,
    marginVertical: 2.5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 'auto',
    elevation: 1,
  },
  bucketlistHeader: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
  },
  avatar: {
    display: 'flex',
    flexBasis: '10%',
    minWidth: 40,
    maxWidth: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#eee',
  },
  nameTime: {
    flexGrow: 1,
    marginLeft: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  grey: {
    color: 'grey',
  },
  bucketlistBody: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: 'auto',
    borderRadius: 5,
    height: 'auto',
  },
  description: {
    width: '90%',
    marginVertical: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },
  blue: {
    color: '#00bcd4',
  },
  commentButton: {
    display: 'flex',
    fontSize: 14,
    color: 'grey',
  },
  likeButton: {
    display: 'flex',
    alignSelf: 'flex-start',
    fontSize: 14,
  },
  commentSection: {
    display: 'flex',
    flexDirection: 'column-reverse',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#f7f7f7',
    width: '100%',
    paddingHorizontal: 20,
  },
  comment: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 5,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
    maxWidth: '95%',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  commentUser: {
    display: 'flex',
    fontSize: 14,
    color: '#00bcd4',
  },
  commentContent: {
    fontSize: 14,
    display: 'flex',
    color: 'grey',
    marginLeft: 5,
  },
  newComment: {
    width: '100%',
    height: 40,
    marginTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  currentAvatar: {
    flexBasis: '10%',
    marginLeft: 0,
    maxWidth: 24,
    height: 24,
    borderRadius: 12,
  },
  inputText: {
    marginLeft: 10,
    fontSize: 14,
    borderWidth: 0,
    backgroundColor: 'transparent',
    color: 'grey',
  },
  label: {
    display: 'flex',
    fontSize: 14,
    color: '#00bcd4',
  },
  value: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  loadMore: {
    position: 'absolute',
    top: 70,
    display: 'flex',
    marginTop: 0,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 100,
    borderRadius: 24,
    zIndex: 3,
  },
  addNew: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: 'grey',
    margin: '0 auto',
    fontSize: 20,
    marginTop: '10%',
  },
  here: {
    color: '#00bcd4',
  },
  progress: {
    position: 'absolute',
    top: 0,
    zIndex: 1000000,
  },
  likesComments: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    paddingHorizontal: 10,
  },
  iconStyle: {
    display: 'flex',
    height: 'auto',
  },
  iconsStyle: {
    display: 'flex',
    height: 18,
    width: 18,
  },
  span: {
    display: 'flex',
    width: 20,
    fontSize: 14,
    marginLeft: 5,
    color: 'grey',
  },
  text: {
    display: 'flex',
  },
  bigIcon: {
    fontSize: 200,
    marginBottom: 100,
  },
  chip: {
    display: 'flex',
    marginRight: 5,
  },
  tagList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 5,
    paddingHorizontal: 20,
  },
  hashTag: {
    display: 'flex',
    height: 20,
    lineHeight: 20,
    color: '#00bcd4',
    fontSize: 14,
    marginRight: 5,
  },
  leftHeaderContent: {
    display: 'flex',
    color: 'grey',
    fontSize: 14,
    fontWeight: 'bold',
  },
  rightHeaderContent: {
    display: 'flex',
    color: 'grey',
    fontSize: 14,
  },
  titleIcon: {
    display: 'flex',
    fontSize: 14,
    height: 14,
    lineHeight: 14,
    marginRight: 5,
    color: '#00bcd4',
  },
  locationIcon: {
    display: 'flex',
    fontSize: 14,
    height: 14,
    lineHeight: 14,
    marginRight: 5,
    marginBottom: 5,
    color: '#00bcd4',
  },
  lifegoBlue: {
    color: '#00bcd4',
  },
  shortInputs: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -20,
  },
  shortInput: {
    width: '30%',
  },
  shortInputStyle: {
    paddingBottom: 3,
    width: '100%',
  },
  thirty: {
    width: '100%',
  },
  tags: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headDetails: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  listView: {
    marginTop: 2.5,
  },
  time: {
    fontSize: 12,
    fontWeight: 'normal',
    color: 'grey',
  },
  locationCategory: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  location: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#f7f7f7',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 5,
    width: 100,
  },
  backButton: {
    display: 'flex',
    color: '#fff',
    marginHorizontal: 20,
    marginVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  flexOne: {
    flex: 1,
  },
  notification: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  notificationText: {
    display: 'flex',
    marginHorizontal: 10,
    fontSize: 14,
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  notificationIcon: {
    display: 'flex',
  },
  notificationView: {
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 5,
    marginVertical: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    height: 'auto',
    elevation: 1,
  },
  none: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  noneText: {
    display: 'flex',
    fontSize: 20,
    color: '#f7f7f7',
  },
  options: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  read: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  notificationActionText: {
    display: 'flex',
    color: '#f7f7f7',
    fontSize: 14,
  },
  navButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  separator: {
    display: 'flex',
    color: '#f7f7f7',
    fontSize: 14,
    fontWeight: 'bold',
  },
  preview: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  wordWrap: {
    display: 'flex',
    fontSize: 14,
    marginHorizontal: 10,
    color: 'grey',
  },
  results: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderTopWidth: 0,
    borderRadius: 5,
    marginHorizontal: 10,
    zIndex: 2,
    marginTop: 0,
  },
  resultContainerStyle: {
    display: 'flex',
    marginVertical: 1,
    borderBottomColor: '#f7f7f7',
  },
  resultWrapperStyle: {
    width: '100%',
  },
  title: {
    color: '#00bcd4',
    fontSize: 14,
  },
  personTitle: {
    color: 'grey',
    fontSize: 14,
  },
  renderResults: {
    display: 'flex',
    maxHeight: Platform.OS === 'ios' ? '85%' : '80%',
    borderRadius: 5,
    zIndex: 3,
    overflow: 'hidden',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  body: {
    display: 'flex',
    flexDirection: 'column-reverse',
  },
  bodyWrapper: {
    maxHeight: '80%',
    display: 'flex',
    flexDirection: 'column-reverse',
    alignItems: 'stretch',
    width: '100%',
    paddingHorizontal: 10,
  },
  top: {
    width: '100%',
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  name: {
    display: 'flex',
    color: 'grey',
    fontSize: 14,
  },
  message: {
    margin: 5,
    width: '90%',
    borderRadius: 10,
    padding: 2,
    paddingLeft: 5,
    fontSize: 14,
    zIndex: 3,
    overflow: 'hidden',
  },
  inputStyles: {
    display: 'flex',
    fontSize: 14,
    width: '90%',
    color: 'grey',
  },
  newMessage: {
    minWidth: '90%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Platform.OS === 'ios' ? 10 : 0,
    paddingVertical: 5,
    borderRadius: 13,
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: Platform.OS === 'ios' ? '#f7f7f7' : 'transparent',
  },
  newButton: {
    display: 'flex',
    width: '10%',
  },
  compose: {
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: 'rgba(235,235,235,0.5)',
    marginVertical: 5,
  },
  searchInput: {
    display: 'flex',
    color: '#fff',
    fontSize: 14,
    minHeight: 30,
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: Platform.OS === 'ios' ? 15 : 0,
    backgroundColor: Platform.OS === 'ios' ? 'rgba(235,235,235,0.5)' : 'transparent',
  },
  commentNavigator: {
    display: 'flex',
    fontSize: 14,
    color: 'grey',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  timeSent: {
    display: 'flex',
    color: '#ddd',
    fontSize: 12,
    alignSelf: 'center',
  },
  commentTime: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginVertical: 2,
  },
  reload: {
    display: 'flex',
    backgroundColor: '#f7f7f7',
    borderRadius: 5,
    padding: 5,
    width: 100,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  reloadText: {
    color: '#00bcd4',
    display: 'flex',
    textAlign: 'center',
    fontSize: 14,
  },
  tabIcon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeElement: {
    backgroundColor: 'red',
    height: 14,
    width: 14,
    borderRadius: 7,
    marginTop: 10,
    color: '#FFFFFF',
    fontSize: 14,
    display: 'flex',
    textAlign: 'center',
    lineHeight: 14,
    alignSelf: 'flex-start',
  },
  iconBadge: {
    display: 'flex',
    backgroundColor: '#00bcd4',
    right: 0,
    top: 0,
    minWidth: 12,
    height: 12,
    borderRadius: 6,
  },
  tabBarOptions: {
    marginTop: 0,
    elevation: 10,
    borderTopWidth: Platform.OS === 'ios' ? 5 : 0,
    borderTopColor: '#00bcd4',
    display: 'flex',
    height: 49,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  indicatorStyle: {
    display: 'flex',
    backgroundColor: '#00bcd4',
  },
  tab: {
    alignSelf: 'stretch',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchArea: {
    flex: 1,
    overflow: 'scroll',
  },
  cancel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    display: 'flex',
    fontSize: 14,
    color: 'grey',
  },
  commentMenu: {
    display: 'flex',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRadius: 5,
    elevation: 1,
    borderWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
    paddingVertical: -1,
    overflow: 'hidden',
    paddingHorizontal: 20,
  },
  checkbox: {
    display: 'flex',
  },
  stretch: {
    display: 'flex',
    alignSelf: 'stretch',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  navigationButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
