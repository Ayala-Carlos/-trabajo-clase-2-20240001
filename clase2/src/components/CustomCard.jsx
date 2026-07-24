import React from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

const CustomCard = ({ worker }) => {
  return (
    <View style={globalStyles.card}>
      <Text style={globalStyles.cardName}>{worker.name}</Text>
      <Text style={globalStyles.cardWork}>{worker.work}</Text>
      <Text style={globalStyles.cardWorkSince}>{worker.work_since}</Text>
    </View>
  );
};

export default CustomCard;