import * as types from '../actions/actionTypes';
import initialState from './initialState';

let bucketList;

export default function bucketlistReducer(
  state = initialState.data,
  action,
) {
  switch (action.type) {
    case types.LOAD_BUCKETLISTS_SUCCESS:
      return {
        ...state,
        bucketlists: action.bucketlists,
      };

    case types.CREATE_BUCKETLIST_SUCCESS:
      bucketList = { ...action.bucketlist, items: [] };
      return {
        ...state,
        bucketlists: [bucketList, ...state.bucketlists],
      };

    case types.UPDATE_BUCKETLIST_SUCCESS:
      return {
        ...state,
        bucketlists: [
          ...state.bucketlists.map(bucketlist =>
            ((bucketlist.id === action.bucketlist.id) ? action.bucketlist : bucketlist),
          ),
        ],
      };

    case types.DELETE_BUCKETLIST_SUCCESS:
      return {
        ...state,
        bucketlists: [...state.bucketlists
          .filter(bucketlist => bucketlist !== action.bucketlist)],
      };

    case types.CREATE_ITEM_SUCCESS:
      return {
        ...state,
        bucketlists: [
          ...state.bucketlists.map((bucketlist) => {
            if (bucketlist.id === action.bucketlist.id) {
              return {
                ...bucketlist,
                items: [
                  action.item, ...bucketlist.items,
                ],
              };
            }
            return bucketlist;
          }),
        ],
      };

    case types.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        bucketlists: [
          ...state.bucketlists.map((bucketlist) => {
            if (bucketlist.id === action.bucketlist.id) {
              return {
                ...bucketlist,
                items: [
                  ...bucketlist.items
                    .map(item => (
                      (item.id === action.item.id) ?
                        action.item :
                        item),
                    ),
                ],
              };
            }
            return bucketlist;
          }),
        ],
      };

    case types.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        bucketlists: [
          ...state.bucketlists.map((bucketlist) => {
            if (bucketlist.id === action.bucketlist.id) {
              return {
                ...bucketlist,
                items: [...bucketlist.items.filter(item => item.id !== action.item.id)],
              };
            }
            return bucketlist;
          }),
        ],
      };

    case types.CHECK_TOKEN:
      return {
        ...state,
        bucketlists: action.loggedIn ? [...state.bucketlists] : [],
      };


    default:
      return state;
  }
}