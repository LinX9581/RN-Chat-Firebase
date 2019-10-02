// Import the screens
import Main from './components/Main';
import Chat from './components/Chat';
import React from "react";
// Import React Navigation
import { createSwitchNavigator, createAppContainer} from "react-navigation";

// Create the navigator
const AppSwitchNavigator = createSwitchNavigator({
  Main: { screen: Main },
  Chat: { screen: Chat },
});

const AppNavigator = createAppContainer(AppSwitchNavigator)

// Export it as the root component
export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
