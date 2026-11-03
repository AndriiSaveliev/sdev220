import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Main component of the app. Displays a greeting message.

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi, my name is Andrii Saveliev, and I am a mobile developer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
