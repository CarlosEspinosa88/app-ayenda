import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

import Home from "../components/screens/home";
import Reservation from "../components/screens/reservations";
import Hotels from "../components/screens/hotels";
import Show from "../components/screens/show";
import Drawer from "../components/drawer";

const AppStack = createStackNavigator(
  {
    // RouteConfigs
    Home: {
      screen: Home,
      path: "home/",
      navigationOptions: {
        header: null
      }
    },
    Reservation: {
      screen: Reservation,
      path: "reservation/",
      navigationOptions: {
        header: null
      }
    },
    Hotels: {
      screen: Hotels,
      path: "hotels/",
      navigationOptions: {
        header: null
      }
    },
    Show: {
      screen: Show,
      path: "show/",
      navigationOptions: {
        header: null
      }
    }
  },
  {
    // OptionsConfigs
    initialRouteName: "Home"
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    // RouteConfigs
    AppStack: {
      screen: AppStack,
      navigationOptions: {
        title: "",
        header: null
      }
    }
  },
  {
    // DrawerNavigatorConfig
    initialRouteName: "AppStack",
    headerBackTitleVisible: true,
    contentComponent: Drawer
  }
);

const AppNavigator = createStackNavigator(
  {
    AppStack: {
      screen: AppStack,
      navigationOptions: {
        header: null
      }
    },
    DrawerNavigator: {
      screen: DrawerNavigator,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "DrawerNavigator"
  }
);

export default createAppContainer(AppNavigator);
