import * as types from './actionTypes';
import alertService from '../api/userAlertApi';
import * as apiCallActions from './apiCallActions';

export const getAlertsSuccess = ({ alerts, screen }) => ({
  type: types.GET_ALERTS,
  alerts,
  message: '',
  screen,
});

export const newAlert = ({ alert }) => ({
  type: types.NEW_ALERT,
  alert,
  message: '',
});

export const markAsReadSuccess = alert => ({
  type: types.EDIT_ALERT,
  alert,
  message: '',
});

export const deleteAlertSuccess = alert => ({
  type: types.DELETE_ALERT,
  alert,
  message: '',
});

export const getAlerts = () => async (dispatch) => {
  dispatch(apiCallActions.beginApiCall({ screen: 'userAlerts' }));
  const response = await alertService.getAlerts();
  if (response.error) {
    dispatch(apiCallActions.apiCallError({ screen: 'userAlerts', error: response.error }));
  } else {
    dispatch(getAlertsSuccess({ ...response, screen: 'userAlerts' }));
  }
};

export const markAlertAsRead = alert => async (dispatch) => {
  const response = await alertService.markAsRead(alert);
  dispatch(apiCallActions.beginApiCall());
  if (response.error) {
    dispatch(apiCallActions.apiCallError(response.error));
  } else {
    dispatch(markAsReadSuccess(response));
  }
};

export const deleteAlert = alert => async (dispatch) => {
  const response = await alertService.deleteAlert(alert);
  dispatch(apiCallActions.beginApiCall());
  if (response.error) {
    dispatch(apiCallActions.apiCallError(response.error));
  } else {
    dispatch(deleteAlertSuccess(alert));
  }
};
