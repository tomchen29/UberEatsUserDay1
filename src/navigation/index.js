import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import DishDetailsScreen from "../screens/DishDetailsScreen";
import Basket from "../screens/Basket";
import OrderScreen from "../screens/OrdersScreen";
import OrderDetails from "../screens/OrderDetails";

import { Foundation, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const OrdersStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs}></Stack.Screen>
    </Stack.Navigator>
  );
};

const HomeTabs = () => {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen}></HomeStack.Screen>
      <HomeStack.Screen
        name="Restaurant"
        component={RestaurantDetailsScreen}
      ></HomeStack.Screen>
      <HomeStack.Screen
        name="Dish"
        component={DishDetailsScreen}
      ></HomeStack.Screen>
      <HomeStack.Screen name="Basket" component={Basket}></HomeStack.Screen>
    </HomeStack.Navigator>
  );
};

const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen
        name="Orders"
        component={OrderScreen}
      ></OrdersStack.Screen>
      <OrdersStack.Screen
        name="Order"
        component={OrderDetails}
      ></OrdersStack.Screen>
    </OrdersStack.Navigator>
  );
};

export default RootNavigator;
