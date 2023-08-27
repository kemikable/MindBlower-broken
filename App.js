import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./MainScreen";
import QuestionScreen from "./QuestionScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // скрываем заголовок
        }}
      >
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
