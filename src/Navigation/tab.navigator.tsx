import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import HomeScreen from "../UI/Screens/HomeScreen";
import FavScreen from "../UI/Screens/FavScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000",
          alignItems: "center",
          justifyContent: "center",
          height: 65,
          borderColor: "#fff",
          width: 350,
          alignSelf: "center",
          borderRadius: 25,
          marginBottom: 25,
        },
        tabBarIcon: ({ focused }) => {
          let iconSource;
          if (route.name === "Home") {
            iconSource = focused
              ? require("../../assets/house-selected.png")
              : require("../../assets/house.png");
          } else if (route.name === "Fav") {
            iconSource = focused
              ? require("../../assets/fav-selected.png")
              : require("../../assets/fav.png");
          }
          return (
            <Image
              source={iconSource}
              style={{ width: 32, height: 32, marginTop: 20 }}
              resizeMode="contain"
            />
          );
        },
      })}
    >
      <Tab.Screen name={"Home"} component={HomeScreen} />
      <Tab.Screen name={"Fav"} component={FavScreen} />
    </Tab.Navigator>
  );
}