import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Titulo } from './util.js';
import Titulo_padrão from './util.js';
import { Button, StyleSheet, Text, View} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>{Titulo}</Text>
      <Text style={{margin: 20}}>{Titulo_padrão}</Text>
      <Button title="Clique Aqui" />
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
  text: {
    margin: 20,
  }
});
