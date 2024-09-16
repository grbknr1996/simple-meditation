import { View, Text, Touchable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CustomButtonProps {
  onPress: () => void;
  title: string;
  textStyle?: string;
  containerStyles?: string;
}
const CustomButton = ({
  onPress,
  title,
  containerStyles = "",
  textStyle = "",
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`bg-white rounded-xl min-h-[62px] justify-center items-center ${containerStyles}`}
      onPress={onPress}
    >
      <Text className={`font-semibold text-lg ${textStyle}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
