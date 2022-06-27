import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import { multiply, isTimeAutomatic, isBluetoothEnabled } from 'react-native-clock';

export default function App() {
  const [result, setResult] = React.useState();
  const [isAutomaticDate, setAutomaticDate] = React.useState();

  React.useEffect(() => {
    isBluetoothEnabled().then(setResult);
  }, []);

  React.useEffect(() => {
    const callNative = async() => {
     const timeResult = await isTimeAutomatic();
     setAutomaticDate(timeResult === 0 ? false : true )
    }
    callNative();
  }, []);

  const refreshNativeCalls = async () => {
    isBluetoothEnabled().then(setResult);
    isTimeAutomatic().then((timeResult)=>  setAutomaticDate(timeResult === 0 ? false : true ))
  }

  return (
    <View style={styles.container}>
      <Text>Is automatic date enable ?</Text>
      <Text> {String(isAutomaticDate)}</Text>
      <Text>Is bluetooth enable ?</Text>
      <Text> {String(result)}</Text>
      <View >
      <Button
          onPress={refreshNativeCalls}
          title="Refresh"
          color="#841584"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
