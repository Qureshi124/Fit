import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Alert, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, TextInput } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';








const Login = ({ navigation, route }) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')



  return (
    <View>
      <View style={{ marginTop: '18%', marginLeft: "25%", backgroundColor: "orange", marginRight: "25%", borderRadius: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Fitlytics</Text>
      </View>
      <View style={{ marginTop: '20%' }}>


        <TextInput mode='outlined' label='Username' onChangeText={setName} placeholder="Enter the Name " style={{ marginLeft: '5%', width: '90%', marginRight: '5%', borderBottomWidth: 1, Type: 'outlined', marginBottom: 30 }}></TextInput>
      </View>

      <View style={{ marginTop: 30 }}>
        <TextInput secureTextEntry={true} mode='outlined' label='Password' onChangeText={setPassword} placeholder="Enter the Password" style={{ marginLeft: '5%', marginRight: '5%', width: '90%', borderBottomWidth: 1, Type: 'outlined', marginBottom: 30 }}></TextInput>
      </View>

      <View style={{ marginTop: 15, marginBottom: 15 }}>
        <Text onPress={() => { navigation.navigate('ForgotPassword') }} style={{ color: "blue", textAlign: 'right', marginRight: 15 }}> Forgot Password?</Text>
      </View>


      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Button style={{ backgroundColor: "orange" }} mode="contained"
          disabled={
            name.length == 0 ||
            password.length == 0
          }
          onPress={() => {
            navigation.navigate('Fitlytics')
          }}>
          Login
        </Button>

      </View>

      <View style={{ marginTop: 30, flexDirection: 'row', marginLeft: "20%" }}>
        <Text style={{ textAlign: 'center', color: "black" }}>Do not have an account?</Text>
        <Text onPress={() => { navigation.navigate('Register') }} style={{ fontWeight: "bold", color: "black" }}>Register!</Text>
      </View>
    </View>
  );
}

const Register = ({ navigation, route }) => {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [pass, setPass] = useState('')
  const [address, setAddress] = useState('')



  return (
    <ScrollView>
      <View style={{ marginTop: '18%', marginLeft: "25%", backgroundColor: "orange", marginRight: "25%", borderRadius: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Fitlytics</Text>
      </View>
      <View style={{ marginTop: '20%' }}>
        <TextInput mode='outlined' label='Username' onChangeText={setName} placeholder="Enter the Name " style={{ marginLeft: '5%', width: '90%', marginRight: '5%', borderBottomWidth: 1, Type: 'outlined', marginBottom: 20 }}></TextInput>
      </View>
      <View style={{ marginTop: 30 }}>
        <TextInput mode='outlined' label='Email' onChangeText={setEmail} placeholder="Enter the Email" style={{ marginLeft: '5%', marginRight: '5%', width: '90%', borderBottomWidth: 1, Type: 'outlined', marginBottom: 20 }}></TextInput>
      </View>
      <View style={{ marginTop: 30 }}>
        <TextInput secureTextEntry={true} mode='outlined' label='Password' onChangeText={setPassword} placeholder="Enter the Password" style={{ marginLeft: '5%', marginRight: '5%', width: '90%', borderBottomWidth: 1, Type: 'outlined', marginBottom: 20 }}></TextInput>
      </View>
      <View style={{ marginTop: 30 }}>
        <TextInput secureTextEntry={true} mode='outlined' label='Confirm Password' onChangeText={setPass} placeholder="Re-Enter the Password" style={{ marginLeft: '5%', marginRight: '5%', width: '90%', borderBottomWidth: 1, Type: 'outlined', marginBottom: 20 }}></TextInput>
      </View>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Button style={{ backgroundColor: "orange", marginBottom: 15 }} mode="contained"
          disabled={
            name.length == 0 ||
            email.length == 0 ||
            password.length == 0 ||
            pass.length == 0

          }
          onPress={() => {
            if (password === pass) {
              navigation.navigate('Login')
            }
          }}>
          Register
        </Button>

      </View>
    </ScrollView>
  );
}
const ForgotPassword = ({ navigation, route }) => {
  const [email, setEmail] = useState('')
  return (
    <View>
      <View style={{ marginTop: '18%', marginLeft: "25%", backgroundColor: "orange", marginRight: "25%", borderRadius: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Fitlytics</Text>
      </View>
      <View style={{ marginTop: '20%' }}>
        <TextInput mode='outlined' label='Email' onChangeText={setEmail} placeholder="Enter the email " style={{ marginLeft: '5%', width: '90%', marginRight: '5%', borderBottomWidth: 1, Type: 'outlined', marginBottom: 30 }}></TextInput>
      </View>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Button style={{ backgroundColor: "orange" }} mode="contained"
          disabled={
            email.length == 0
          }
          onPress={() => {
            Alert.alert('Password reset')
            navigation.navigate('Login')
          }}>
          Reset Password
        </Button>

      </View>
    </View>
  );
}

const Home = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View style={{ marginTop: '18%', marginLeft: "25%", backgroundColor: "orange", marginRight: "25%", borderRadius: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Fitlytics</Text>
      </View>
      <View style={{ marginTop: '10%', flexDirection: 'column' }}>
        <Image
          style={{ width: 380, height: 200 }}
          source={{ uri: 'https://peekaboo.guru/blog/wp-content/uploads/2020/12/feature-01-5-1024x536.png' }}
        />
        <Image
          style={{ width: 380, height: 200, marginTop: '5%' }}
          source={{ uri: 'https://peekaboo.guru/blog/wp-content/uploads/2020/12/Omnifarious-e1606813567739.jpg' }}
        />
        <Image
          style={{ width: 380, height: 200, marginTop: '5%' }}
          source={{ uri: 'https://citybook.pk/wp-content/uploads/2019/01/gym-in-lahore-CityBook-1.jpg' }}
        />
        <Image
          style={{ width: 380, height: 200, marginTop: '5%' }}
          source={{ uri: 'https://i.pinimg.com/originals/60/61/e4/6061e47b554a42acd6453595768d41dc.jpg' }}
        />
        <Image
          style={{ width: 380, height: 200, marginTop: '5%' }}
          source={{ uri: 'https://i.pinimg.com/originals/d0/1f/c8/d01fc8c67b8430a845a8d97ffc9254d9.jpg' }}
        />
      </View>
    </ScrollView>
  );
}

const Admin = ({ navigation, route }) => {
  return (
    <ScrollView>

      <View style={{ marginTop: '18%', marginLeft: "25%", backgroundColor: "orange", marginRight: "25%", borderRadius: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Fitlytics</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '20%', borderWidth: 2 }}>
        <View style={{ marginLeft: 7, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Add Members</Text>
        </View>

        <View style={{ marginLeft: 7, marginTop: 5, marginLeft: '46%' }}>
          <Button style={{ backgroundColor: "orange" }} mode="contained"
            onPress={() => {
              navigation.navigate('AddMember')
            }}>
            Add
          </Button>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '20%', borderWidth: 2 }}>
        <View style={{ marginLeft: 7, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Add Trainers</Text>
        </View>

        <View style={{ marginLeft: 7, marginTop: 5, marginLeft: '49%' }}>
          <Button style={{ backgroundColor: "orange" }} mode="contained"
            onPress={() => {
              navigation.navigate('AddTrainer')
            }}>
            Add
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const Trainers = ({ navigation, route }) => {
  return (
    <ScrollView>

      <View style={{ marginTop: '18%', marginLeft: "25%", backgroundColor: "orange", marginRight: "25%", borderRadius: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Fitlytics</Text>
      </View>
      <View style={{ marginTop: '18%', marginLeft: "25%", backgroundColor: "orange", marginRight: "25%", borderRadius: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Trainers</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '20%', borderWidth: 2 }}>
        <View style={{ marginLeft: 7, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Trainer Name</Text>
        </View>

        <View style={{ marginLeft: 7, marginTop: 5, marginLeft: '40%' }}>
          <Button style={{ backgroundColor: "orange" }} mode="contained"
            onPress={() => {
              navigation.navigate('Members')
            }}>
            View
          </Button>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '20%', borderWidth: 2 }}>
        <View style={{ marginLeft: 7, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Trainer Name</Text>
        </View>

        <View style={{ marginLeft: 7, marginTop: 5, marginLeft: '40%' }}>
          <Button style={{ backgroundColor: "orange" }} mode="contained"
            onPress={() => {
              navigation.navigate('Trainers')
            }}>
            View
          </Button>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '20%', borderWidth: 2 }}>
        <View style={{ marginLeft: 7, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Trainer Name</Text>
        </View>

        <View style={{ marginLeft: 7, marginTop: 5, marginLeft: '40%' }}>
          <Button style={{ backgroundColor: "orange" }} mode="contained"
            onPress={() => {
              navigation.navigate('Members')
            }}>
            View
          </Button>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '20%', borderWidth: 2 }}>
        <View style={{ marginLeft: 7, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Trainer Name</Text>
        </View>

        <View style={{ marginLeft: 7, marginTop: 5, marginLeft: '40%' }}>
          <Button style={{ backgroundColor: "orange" }} mode="contained"
            onPress={() => {
              navigation.navigate('Trainers')
            }}>
            View
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const Members = ({ navigation, route }) => {
  return (
    <ScrollView>

      <View style={{ marginTop: '18%', marginLeft: "25%", backgroundColor: "orange", marginRight: "25%", borderRadius: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Fitlytics</Text>
      </View>
      <View style={{ marginTop: '18%', marginLeft: "25%", backgroundColor: "orange", marginRight: "25%", borderRadius: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Members</Text>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '20%', borderWidth: 2 }}>
        <View style={{ marginLeft: 7, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Member Name</Text>
        </View>

        <View style={{ marginLeft: 7, marginTop: 5, marginLeft: '40%' }}>
          <Button style={{ backgroundColor: "orange" }} mode="contained"
            onPress={() => {
              navigation.navigate('Members')
            }}>
            View
          </Button>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '20%', borderWidth: 2 }}>
        <View style={{ marginLeft: 7, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Member Name</Text>
        </View>

        <View style={{ marginLeft: 7, marginTop: 5, marginLeft: '40%' }}>
          <Button style={{ backgroundColor: "orange" }} mode="contained"
            onPress={() => {
              navigation.navigate('Trainers')
            }}>
            View
          </Button>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '20%', borderWidth: 2 }}>
        <View style={{ marginLeft: 7, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Member Name</Text>
        </View>

        <View style={{ marginLeft: 7, marginTop: 5, marginLeft: '40%' }}>
          <Button style={{ backgroundColor: "orange" }} mode="contained"
            onPress={() => {
              navigation.navigate('Members')
            }}>
            View
          </Button>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: '20%', borderWidth: 2 }}>
        <View style={{ marginLeft: 7, marginTop: 10 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>Member Name</Text>
        </View>

        <View style={{ marginLeft: 7, marginTop: 5, marginLeft: '40%' }}>
          <Button style={{ backgroundColor: "orange" }} mode="contained"
            onPress={() => {
              navigation.navigate('Members')
            }}>
            View
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
const AddMember = ({ navigation, route }) => {
  const [name, setName] = useState('')
  return (
    <View>
      <View style={{ marginTop: '18%', marginLeft: "25%", backgroundColor: "orange", marginRight: "25%", borderRadius: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Fitlytics</Text>
      </View>
      <View style={{ marginTop: '18%', marginLeft: "21%", backgroundColor: "orange", marginRight: "30%", borderRadius: 100, width: '60%' }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}> Add Members</Text>
      </View>
      <View style={{ marginTop: '20%' }}>
        <TextInput mode='outlined' label='Username' onChangeText={setName} placeholder="Enter the Name " style={{ marginLeft: '5%', width: '90%', marginRight: '5%', borderBottomWidth: 1, Type: 'outlined', marginBottom: 20 }}></TextInput>
      </View>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Button style={{ backgroundColor: "orange" }} mode="contained"
          disabled={
            name.length == 0 ||
            number.length == 0
          }
          onPress={() => {
            addmember();
            Alert.alert('Member Added')
            navigation.navigate('Admin')
          }}>
          Add
        </Button>

      </View>
    </View>
  );
}
const AddTrainer = ({ navigation, route }) => {
  const [name, setName] = useState('')

  return (
    <View>
      <View style={{ marginTop: '18%', marginLeft: "25%", backgroundColor: "orange", marginRight: "25%", borderRadius: 100 }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Fitlytics</Text>
      </View>
      <View style={{ marginTop: '18%', marginLeft: "21%", backgroundColor: "orange", marginRight: "30%", borderRadius: 100, width: '60%' }}>
        <Text style={{ textAlign: "center", fontSize: 30, color: "black" }}>Add Trainers</Text>
      </View>
      <View style={{ marginTop: '20%' }}>
        <TextInput mode='outlined' label='Username' onChangeText={setName} placeholder="Enter the Name " style={{ marginLeft: '5%', width: '90%', marginRight: '5%', borderBottomWidth: 1, Type: 'outlined', marginBottom: 20 }}></TextInput>
      </View>
      <View style={{ marginTop: 10, alignItems: "center" }}>
        <Button style={{ backgroundColor: "orange" }} mode="contained"
          disabled={
            name.length == 0 ||
            number.length == 0
          }
          onPress={() => {
            addtrainer();
            Alert.alert('Trainer Added')
            navigation.navigate('Admin')
          }}>
          Add
        </Button>

      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Fitlytics = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Admin" component={Admin} />
      <Tab.Screen name="Members" component={Members} />
      <Tab.Screen name="Trainers" component={Trainers} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();



const App=() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{title:"Login"}} />
      <Stack.Screen name="Register" component={Register} options={{title:"Register"}} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{title:"ForgotPassword"}}/>
      <Stack.Screen name="Fitlytics" component={Fitlytics} options={{title:"Fitlytics"}} />
      <Stack.Screen name="AddMember" component={AddMember} options={{title:"AddMember"}} />
      <Stack.Screen name="AddTrainer" component={AddTrainer} options={{title:"AddTrainer"}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
