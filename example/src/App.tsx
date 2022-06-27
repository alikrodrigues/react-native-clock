import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply, isTimeAutomatic } from 'react-native-clock';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [isAutomaticDate, setAutomaticDate] = React.useState();

  React.useEffect(() => {
    multiply(3, 7).then(setResult);
  }, []);

  React.useEffect(() => {
    isTimeAutomatic().then(setAutomaticDate);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {isAutomaticDate}</Text>
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
