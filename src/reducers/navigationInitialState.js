import DrawerNav from '../navigators/drawer';
import HomeTabNav from '../navigators/home';
import AllBucketlistNavigator from '../navigators/allBucketlists';
import MessageNavigator from '../navigators/messages';
import MyBucketlistNavigator from '../navigators/myBucketlists';

export const navigators = {
  DrawerNav,
  HomeTabNav,
  AllBucketlistNavigator,
  MessageNavigator,
  MyBucketlistNavigator,
};

export const navigationData = {
  DrawerNav: DrawerNav.router.getStateForAction(DrawerNav.router.getActionForPathAndParams('Home/{DEFAULT_SCREEN}')),
  HomeTabNav: HomeTabNav.router.getStateForAction(HomeTabNav.router.getActionForPathAndParams('HomeBucketlists/{DEFAULT_SCREEN}')),
  AllBucketlistNavigator: AllBucketlistNavigator.router.getStateForAction(AllBucketlistNavigator.router.getActionForPathAndParams('bucketlists/{DEFAULT_SCREEN}')),
  MessageNavigator: MessageNavigator.router.getStateForAction(MessageNavigator.router.getActionForPathAndParams('MessageList/{DEFAULT_SCREEN}')),
  MyBucketlistNavigator: MyBucketlistNavigator.router.getStateForAction(MyBucketlistNavigator.router.getActionForPathAndParams('bucketlists/{DEFAULT_SCREEN}')),
};
