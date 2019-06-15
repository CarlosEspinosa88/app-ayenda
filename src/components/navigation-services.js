import { NavigationActions } from "react-navigation";

let _navigator;

const setNavigator = refNavigator => {
  _navigator = refNavigator;
};

// const getNavigator = () => _navigator;

const navigate = (routeName, params) => {   
  _navigator.dispatch(NavigationActions.navigate({ routeName, params }));
};

export default {
  setNavigator,
  navigate,
  _navigator
};
