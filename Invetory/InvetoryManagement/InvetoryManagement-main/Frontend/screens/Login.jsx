import React, { useReducer } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';

const BASE_URL = 'https://10.0.2.2:3030';

const initialState = {
  username: '',
  password: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

export default function Login() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (key, value) => {
    dispatch({ type: `SET_${key.toUpperCase()}`, payload: value });
  };

  const handleLogin = async () => {
    console.log('Logging in:', state);
    try {
      console.log('Logging in:', state);
      const response = await fetch(`${BASE_URL}/user/login`, {
        method: 'POST',
  
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: state.username,
          password: state.password
        })
      });
      console.log('Logging in:', state);
      if (!response.ok) {
        throw new Error('Error logging in');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      // Handle successful login
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.secondTitle}>Enter your credentials</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => handleInputChange('username', text)}
          value={state.username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => handleInputChange('password', text)}
          value={state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
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
    marginHorizontal: 40,
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
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  secondTitle: {
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 10,
  },
});
