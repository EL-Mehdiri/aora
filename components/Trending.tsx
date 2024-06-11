import { View, Text, FlatList } from "react-native";
import React from "react";

const Trending = ({ posts }: any) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item?._id}
      renderItem={({ item }) => (
        <Text className="text-3xl text-white ">{item._id}</Text>
      )}
      horizontal
    />
  );
};

export default Trending;
