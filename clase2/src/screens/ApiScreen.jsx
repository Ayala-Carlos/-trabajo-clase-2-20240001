import React from "react";
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet } from "react-native";
import useRickAndMortyData from "../hooks/useRickAndMortyData";
import { globalStyles } from "../styles/globalStyles";

const ApiScreen = () => {
  // Usamos nuestro Hook personalizado
  const { data, loading, error } = useRickAndMortyData();

  if (loading) {
    return (
      <View style={[globalStyles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#FFCB05" />
        <Text style={{ color: "#fff", marginTop: 10 }}>Cargando datos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[globalStyles.container, { justifyContent: "center", alignItems: "center" }]}>
        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Personajes (API Externa)</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[globalStyles.card, localStyles.cardContent]}>
            <Image source={{ uri: item.image }} style={localStyles.avatar} />
            <View style={localStyles.infoContainer}>
              <Text style={globalStyles.cardName}>{item.name}</Text>
              <Text style={globalStyles.cardWork}>Especie: {item.species}</Text>
              <Text style={globalStyles.cardWorkSince}>Estado: {item.status}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const localStyles = StyleSheet.create({
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
});

export default ApiScreen;