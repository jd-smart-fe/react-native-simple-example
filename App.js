import React from 'react';
import { StackNavigator } from 'react-navigation';

import Index from "./components/Index";
import List from "./components/List";

export default App = StackNavigator({
  Index: { screen: Index },
  List: { screen: List },
});
