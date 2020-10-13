import React, { useState } from "react";
import { TextInput, StyleSheet, SafeAreaView, Button } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Course Goal"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    alignContent: "space-between",
  },
});
export default GoalInput;
