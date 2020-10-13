import React from "react";
import { StyleSheet, Text } from "react-native";

const GoalItem = (props) => {
  return <Text style={styles.listItem}>{props.title}</Text>;
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "#000",
    borderWidth: 1,
  },
});

export default GoalItem;
