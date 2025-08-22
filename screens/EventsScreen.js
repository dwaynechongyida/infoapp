import { View, Text, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import EventsSecond from './EventsSecond';

const EventsScreen = ({ navigation }) => {
  return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Events!</Text>
    <Pressable onPress={() => navigation.navigate("Events 2nd Page")} style={{
      backgroundColor: 'red',
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    }}>
      <Text style={{ color: 'white'}}>Next Page Here</Text>
    </Pressable>
  </View>
  );
};

const Stack = createStackNavigator();

const EventsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Events 2nd Page" component={EventsSecond} />
    </Stack.Navigator>
  );
}

export default EventsStack;