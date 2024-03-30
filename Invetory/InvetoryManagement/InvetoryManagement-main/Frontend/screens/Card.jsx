import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Card = ({ name, id, location }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>{name}</Text>
      <Text style={styles.cardText}>{id}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              style={{ paddingHorizontal: 2, marginBottom: 10 }}
              name="call"
            />
            <Text style={styles.cardText}>Call</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              style={{ paddingHorizontal: 2, marginBottom: 10 }}
              name="location"
            />
            <Text style={styles.cardText}>{location}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.surveyButton}>
          <Text style={styles.surveyButtonText}>Survey</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  surveyButton: {
    backgroundColor: "#0367FE",
    padding: 10,
    borderRadius: 5,
  },
  surveyButtonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Card;
