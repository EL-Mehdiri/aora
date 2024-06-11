import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "@/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

interface Props {
  title: string;
  subTitle: string;
}

const EmptyState = ({ title, subTitle }: Props) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <View>
        <Text className="text-sm font-pmedium text-white">{subTitle}</Text>
        <Text className="font-pmedium text-center text-xl mt-2 text-gray-100">
          {title}
        </Text>
      </View>
      <CustomButton
        title="Create Vidoe"
        handlePress={() => router.push("/create")}
        containerStyle="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
