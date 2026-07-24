import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import CustomCard from "../components/CustomCard";
import CustomInput from "../components/CustomInput";
import useCustomData from "../hooks/useCustomData";
import { globalStyles } from "../styles/globalStyles";

const WorkersScreen = () => {
  const { workerData, loading } = useCustomData();
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrar empleados por nombre
  const filteredWorkers = workerData
    ? workerData.filter((worker) =>
        worker.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Lista de empleados</Text>

      <Text style={globalStyles.description}>
        En esta pantalla estamos mostrando la lista de empleados. Puedes usar el
        buscador a continuación para filtrar por nombre.
      </Text>

      {/* Componente de búsqueda */}
      <CustomInput
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        placeholder="Buscar empleado por nombre..."
      />

      <FlatList
        data={filteredWorkers}
        renderItem={({ item }) => <CustomCard worker={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default WorkersScreen;