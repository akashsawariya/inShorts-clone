import { StyleSheet, Text, View, StatusBar } from "react-native";
import Context from "./API/Context";
import InShortTabs from "./components/InShortTabs";

function App() {
  return (
    <View style={{ ...styles.container, backgroundColor: "#282c35" }}>
      <InShortTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 100,
    marginTop: StatusBar.currentHeight,
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
