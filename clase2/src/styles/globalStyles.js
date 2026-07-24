import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // Estilos de pantallas
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
  },

  // Estilos de CustomCard
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  cardWork: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
  },
  cardWorkSince: {
    fontSize: 14,
    color: "#666",
  },

  // Estilos de CustomButton
  button: {
    backgroundColor: "#FFCB05",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: "#3B4CCA",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  // Estilos para CustomInput (Punto 2)
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 8,
    fontSize: 16,
    color: "#333",
  },
});