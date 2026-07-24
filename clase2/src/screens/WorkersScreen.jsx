import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
//importamos el componente CustomCard que se encargará de mostrar la información de cada empleado
import CustomCard from "../components/CustomCard";
//importamos el hook useCustomData que se encargará de obtener la información de los empleados desde la API
import useCustomData from "../hooks/useCustomData";

const WorkersScreen = () => {
  //utilizamos el hook useCustomData para obtener la información de los empleados y el estado de loading
  const { workerData, loading } = useCustomData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de empleados</Text>

      <Text style={styles.description}>
        En esta pantalla estamos mostrando la lista de empleados utilizando el
        componente FlatList de RReact Native. Cada empleado se representa
        mediante un CustomCard que muestra su nombre, trabajo y fecha de inicio.
      </Text>
      <FlatList
        data={workerData}
        renderItem={({ item }) => <CustomCard worker={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default WorkersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#791010",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    fontWeight: "semibold",
  },
});