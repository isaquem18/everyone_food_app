import { createStackNavigator } from '@react-navigation/stack';

import { Onboard } from '../../screens/Onboard';
import { LoginAndRegister } from '../../screens/LoginAndRegister';
import { BottomTabsRoutes } from '../BottomTabsRoutes';

export function StackRoutes () {

  const {
    Navigator,
    Screen
  } = createStackNavigator();

  return (
    <Navigator>
      <Screen name="Onboard" component={Onboard} options={{ headerShown: false }} />
      <Screen name="LoginAndRegister" component={LoginAndRegister}  options={{ headerShown: false }} />
      <Screen name="BottomTabsRoutes" component={BottomTabsRoutes} />
    </Navigator>
  )
}