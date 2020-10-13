import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";

import colors from "../config/colors";
import GoalItem from "../../components/GoalItem";
import GoalInput from "../../components/GoalInput";

function ViewImageScreen(props) {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalValue) => {
    setCourseGoals((currentGoals) => [
      ...courseGoals,
      { id: Math.random().toString, value: goalValue },
    ]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <View>
            <GoalItem title={itemData.item.value} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
