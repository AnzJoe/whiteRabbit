import { 
  REQUEST_DASHBOARD_EMPLOYEE_DATA, 
  RECEIVE_DASHBOARD_EMPLOYEE_DATA
} from "../action/dashboardAction";


export default function dashboardReducer(
  state = {
    isEmployeeFetching: false,
    employeeArray: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_DASHBOARD_EMPLOYEE_DATA:
      return Object.assign({}, state, {
        isEmployeeFetching: true,
      });
    case RECEIVE_DASHBOARD_EMPLOYEE_DATA:

      return Object.assign({}, state, {
        isEmployeeFetching: false,
        employeeArray: action.data || state.data,
        error: action.error,
      });
    default:
      return state;
  }
}
