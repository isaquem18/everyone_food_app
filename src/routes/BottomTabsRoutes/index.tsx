import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '../../screens/Home';

const {
  Navigator,
  Screen
} = createBottomTabNavigator();

export function BottomTabsRoutes () {

  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen name="Likes" component={Home} />
      <Screen name="Users" component={Home} />
      <Screen name="History" component={Home} />
    </Navigator>
  )
}