import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Card from './Card';
const BASE_URL = 'http://10.0.2.2:3030'; // Replace with your actual backend URL
function HomeScreen({ navigation }) {

const [persons, setPersons] = useState([]);

useEffect(() => {
  fetchPersons();
}, []);

const fetchPersons = async () => {
  try {
    const response = await fetch(`${BASE_URL}/user/persons`);
    if (!response.ok) {
      throw new Error('Error fetching persons');
    }
    const data = await response.json();
    setPersons(data);
  } catch (error) {
    console.error('Error fetching persons:', error);
  }
};


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.drawerButton} onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Outlet Info</Text>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>
      <View style={styles.cardContainer}>
        <ScrollView showsVerticalScrollIndicator = {false}>
          {persons.map((data, index) => (
            <Card key={index} {...data} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#0367FE",
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop : 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "white",
    flex: 1, 
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
 
  cardContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius : 5,
    padding: 20,
  },
});

export default HomeScreen;

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import Card from './Card';

// const BASE_URL = 'http://10.0.2.2:3030'; // Replace with your actual backend URL

// function HomeScreen({ navigation }) {
//   const [persons, setPersons] = useState([]);

//   useEffect(() => {
//     fetchPersons();
//   }, []);

//   const fetchPersons = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/user/persons`);
//       if (!response.ok) {
//         throw new Error('Error fetching persons');
//       }
//       const data = await response.json();
//       setPersons(data);
//     } catch (error) {
//       console.error('Error fetching persons:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Your existing code */}
//       <View style={styles.cardContainer}>
//         <ScrollView showsVerticalScrollIndicator={false}>
//           {persons.map((person, index) => (
//             <Card key={index} name={person.username} id={person.userID} location={person.userlocation} />
//           ))}
//         </ScrollView>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#0367FE",
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop : 30
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: "white",
//     flex: 1, 
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginTop: 20,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     fontSize: 16,
//   },
 
//   cardContainer: {
//     flex: 1,
//     backgroundColor: 'white',
//     marginTop: 20,
//     borderRadius : 5,
//     padding: 20,
//   },
// });

// export default HomeScreen;

