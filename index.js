import { registerRootComponent } from "expo";
import { Platform, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import App from "./App";

function Root() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#020617",
      }}
    >
      <App />
      <StatusBar style="light" translucent={false} />
    </SafeAreaView>
  );
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Root);
