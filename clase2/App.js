import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import WorkersScreen from "./src/screens/WorkersScreen";
import ApiScreen from "./src/screens/ApiScreen";
import CustomButton from "./src/components/CustomButton";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("workers");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#791010" }}>
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <CustomButton
          title={
            currentScreen === "workers"
              ? "Ir a API Externa"
              : "Ir a Lista de Empleados"
          }
          onPress={() =>
            setCurrentScreen(currentScreen === "workers" ? "api" : "workers")
          }
        />
      </View>

      {currentScreen === "workers" ? <WorkersScreen /> : <ApiScreen />}
    </SafeAreaView>
  );
}