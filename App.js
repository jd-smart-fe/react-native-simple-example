import React from 'react';
import { StackNavigator } from 'react-navigation';

// debug
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

import Index from "./components/Index";
import List from "./components/List";

export default App = StackNavigator({
  Index: { screen: Index },
  List: { screen: List },
});
