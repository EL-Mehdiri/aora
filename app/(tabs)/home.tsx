import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const home = () => {
  return (
    <View>
      <Text>home</Text>
      <Link href={"/sign-up"} className="p-10">
        {" "}
        Sign up
      </Link>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({});

// rid-aora
