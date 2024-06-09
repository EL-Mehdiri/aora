import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalContext } from "@/context/GlobalProvider";

const profile = () => {
  const { user } = useGlobalContext();
  return (
    <View>
      <Text>profile</Text>
      <Text>{user?.username}</Text>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
