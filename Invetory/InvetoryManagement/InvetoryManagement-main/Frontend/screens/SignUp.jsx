import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://10.0.2.2:3030';

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });

      console.log("Username: ", username);

      if (!response.ok) {
        throw new Error('Error signing up');
      }

      const data = await response.json();
      
      // Save token to AsyncStorage
      await AsyncStorage.setItem("token", data.token);

      // Navigate to another screen (e.g., courses)
      navigation.navigate("Courses");
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle error (e.g., display error message to user)
    }
  }; 

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Register</Text>
        <Text style={styles.secondTitle}>Enter your credentials</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.secondTitle}>Already Registered !! Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0367FE',
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    marginHorizontal: 40
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#0367FE',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 5
  },
  secondTitle: {
    fontSize: 16,
    fontWeight: "500",
    paddingBottom: 10,
  }
});
