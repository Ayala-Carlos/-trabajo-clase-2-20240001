import React from "react";
import { View, TextInput } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const CustomInput = ({ value, onChangeText, placeholder = "Buscar..." }) => {
  return (
    <View style={globalStyles.inputContainer}>
      <TextInput
        style={globalStyles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#888"
      />
    </View>
  );
};

export default CustomInput;