import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test gggffyfkj</Text>
      {/* <StatusBar style="auto" /> */}
      <StatusBar hidden />
      <Button title={"Some text"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aad',
    // alignItems: 'center',
    // justifyContent: 'center',

  },
  text: {
    color: "yellow"
  }
});
