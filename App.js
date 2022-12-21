import React, {useEffect} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import Crashes from 'appcenter-crashes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = () => {
  const checkAppCrashInPrevSession = async () => {
    const didAppCrash = await Crashes.hasCrashedInLastSession();
    if (didAppCrash) {
      alert("Sorry for the incovenience caused, We're working on the solution");
    }
  };

  useEffect(() => {
    checkAppCrashInPrevSession();
  }, []);

  return (
    <View style={styles.container}>
      <Button
        title="Generate Crash"
        onPress={() => {
          throw new Error('Some error');
        }}
      />
    </View>
  );
};

export default App;
