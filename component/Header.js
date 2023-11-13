import  React  from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.main}>
        <Text style={styles.Text}>Список дел:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
main: {
    paddingTop:  60,
    height: 100,
    backgroundColor: 'blue',
      },
Text: {
    fontSize: 18,
    color: 'silver',
    textAlign: 'center',
      }
});
   