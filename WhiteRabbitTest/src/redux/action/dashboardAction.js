import api from "api";

export const REQUEST_DASHBOARD_SECTION_ONE_DATA = "REQUEST_DASHBOARD_SECTION_ONE_DATA";
export const RECEIVE_DASHBOARD_SECTION_ONE_DATA = "RECEIVE_DASHBOARD_SECTION_ONE_DATA";
export const REQUEST_DASHBOARD_SECTION_TWO_DATA = "REQUEST_DASHBOARD_SECTION_TWO_DATA";
export const RECEIVE_DASHBOARD_SECTION_TWO_DATA = "RECEIVE_DASHBOARD_SECTION_TWO_DATA";
export const REQUEST_DASHBOARD_SECTION_THREE_DATA = "REQUEST_DASHBOARD_SECTION_THREE_DATA";
export const RECEIVE_DASHBOARD_SECTION_THREE_DATA = "RECEIVE_DASHBOARD_SECTION_THREE_DATA";
export const REQUEST_IMAGES_DATA = "REQUEST_IMAGES_DATA";
export const RECEIVE_IMAGES_DATA = "RECEIVE_IMAGES_DATA";
//SECTION ONE
export function requestDashboardSectionOneData() {
  return {
    type: REQUEST_DASHBOARD_SECTION_ONE_DATA,
  };
}

export function receiveDashboardSectionOneData(data, error) {
  

  return {
    type: RECEIVE_DASHBOARD_SECTION_ONE_DATA,
    data,
    error
  };
}

function fetchDashboardSectionOneData() {
  return async (dispatch) => {
    dispatch(requestDashboardSectionOneData());
    try {
      const json = await api.getDashboardData();
      return dispatch(receiveDashboardSectionOneData(json, null));
    } catch (error) {
      return dispatch(receiveDashboardSectionOneData(null, error));
    }
  };
}

function shouldFetchDashboardSectionOneData(state) {
  const dashboardData = state.dashboardReducer;
  if (!dashboardData) {
    return true;
  } else if (dashboardData.isSectionOneFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchDashboardSectionOneDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchDashboardSectionOneData(getState())) {
      return dispatch(fetchDashboardSectionOneData());
    }
  };
}


//SECTION TWO
export function requestDashboardSectionTwoData() {
  return {
    type: REQUEST_DASHBOARD_SECTION_TWO_DATA,
  };
}

export function receiveDashboardSectionTwoData(data, error) {
  

  return {
    type: RECEIVE_DASHBOARD_SECTION_TWO_DATA,
    data,
    error
  };
}

function fetchDashboardSectionTwoData() {
  return async (dispatch) => {
    dispatch(requestDashboardSectionTwoData());
    try {
      const json = await api.getDashboardData();
      return dispatch(receiveDashboardSectionTwoData(json, null));
    } catch (error) {
      return dispatch(receiveDashboardSectionTwoData(null, error));
    }
  };
}

function shouldFetchDashboardSectionTwoData(state) {
  const dashboardData = state.dashboardReducer;
  if (!dashboardData) {
    return true;
  } else if (dashboardData.isSectionTwoFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchDashboardSectionTwoDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchDashboardSectionTwoData(getState())) {
      return dispatch(fetchDashboardSectionTwoData());
    }
  };
}

//SECTION THREE
export function requestDashboardSectionThreeData() {
  return {
    type: REQUEST_DASHBOARD_SECTION_THREE_DATA,
  };
}

export function receiveDashboardSectionThreeData(data, error) {
  

  return {
    type: RECEIVE_DASHBOARD_SECTION_THREE_DATA,
    data,
    error
  };
}

function fetchDashboardSectionThreeData() {
  return async (dispatch) => {
    dispatch(requestDashboardSectionThreeData());
    try {
      const json = await api.getDashboardData();
      return dispatch(receiveDashboardSectionThreeData(json, null));
    } catch (error) {
      return dispatch(receiveDashboardSectionThreeData(null, error));
    }
  };
}

function shouldFetchDashboardSectionThreeData(state) {
  const dashboardData = state.dashboardReducer;
  if (!dashboardData) {
    return true;
  } else if (dashboardData.isSectionThreeFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchDashboardSectionThreeDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchDashboardSectionThreeData(getState())) {
      return dispatch(fetchDashboardSectionThreeData());
    }
  };
}


//Images
export function requestImagesData() {
  return {
    type: REQUEST_IMAGES_DATA,
  };
}

export function receiveImagesData(data, error) {
  

  return {
    type: RECEIVE_IMAGES_DATA,
    data,
    error
  };
}

function fetchImagesData() {
  return async (dispatch) => {
    dispatch(requestImagesData());
    try {
      const json = await api.getImagesData();
      return dispatch(receiveImagesData(json, null));
    } catch (error) {
      return dispatch(receiveImagesData(null, error));
    }
  };
}

function shouldFetchImagesData(state) {
  const dashboardData = state.dashboardReducer;
  if (!dashboardData) {
    return true;
  } else if (dashboardData.isImagesFetching) {
    return false;
  } else {
    return true;
  }
}

export function fetchImagesDataIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchImagesData(getState())) {
      return dispatch(fetchImagesData());
    }
  };
}
