import api from "api";

export const REQUEST_DASHBOARD_EMPLOYEE_DATA = "REQUEST_DASHBOARD_EMPLOYEE_DATA";
export const RECEIVE_DASHBOARD_EMPLOYEE_DATA = "RECEIVE_DASHBOARD_EMPLOYEE_DATA";

//SECTION ONE
export function requestDashboardEmployeeData() {
  return {
    type: REQUEST_DASHBOARD_EMPLOYEE_DATA,
  };
}

export function receiveDashboardEmployeeData(data, error) {
  

  return {
    type: RECEIVE_DASHBOARD_EMPLOYEE_DATA,
    data,
    error
  };
}

function fetchDashboardEmployeeData() {
  return async (dispatch) => {
    dispatch(requestDashboardEmployeeData());
    try {
      const json = await api.getDashboardData();
      return dispatch(receiveDashboardEmployeeData(json, null));
    } catch (error) {
      return dispatch(receiveDashboardEmployeeData(null, error));
    }
  };
}

function shouldFetchDashboardEmployeeData(state) {
  const dashboardData = state.dashboardReducer;
  if (!dashboardData) {
    return true;
  } else if (dashboardData.isEmployeeFetching || dashboardData.employeeArray.length != 0) {
    return false;
  } else {
    return true;
  }
}

export function fetchDashboardEmployeeDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchDashboardEmployeeData(getState())) {
      return dispatch(fetchDashboardEmployeeData());
    }
  };
}

