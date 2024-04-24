import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ProductPage from './screens/ProductPage';
import ProductDetails from './screens/ProductDetails';

import CartScreen from './screens/cartScreen';
import CartIcon from './components/cartDetails';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={ProductPage}
          name="Products"
          options={{
            headerRight: () => <CartIcon />,
          }}
        />
        <Stack.Screen component={ProductDetails} name="Product Details" />
        <Stack.Screen
          component={CartScreen}
          name="Cart"
          options={{title: 'Your Cart'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
