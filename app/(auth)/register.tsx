import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    dateOfBirth: '',
    tribe: '',
    clan: '',
    circumcisionYear: '',
    currentLocation: '',
    ancestralLocation: '',
    bio: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <LinearGradient
      colors={['#2D3436', '#000000']}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join our cultural community</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#999"
            value={formData.fullName}
            onChangeText={(value) => updateField('fullName', value)}
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#999"
            value={formData.email}
            onChangeText={(value) => updateField('email', value)}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#999"
            value={formData.password}
            onChangeText={(value) => updateField('password', value)}
            secureTextEntry
          />

          <TextInput
            style={styles.input}
            placeholder="Date of Birth (YYYY-MM-DD)"
            placeholderTextColor="#999"
            value={formData.dateOfBirth}
            onChangeText={(value) => updateField('dateOfBirth', value)}
          />

          <TextInput
            style={styles.input}
            placeholder="Tribe/Ethnic Group"
            placeholderTextColor="#999"
            value={formData.tribe}
            onChangeText={(value) => updateField('tribe', value)}
          />

          <TextInput
            style={styles.input}
            placeholder="Clan Affiliation"
            placeholderTextColor="#999"
            value={formData.clan}
            onChangeText={(value) => updateField('clan', value)}
          />

          <TextInput
            style={styles.input}
            placeholder="Circumcision Year (YYYY/YYYY)"
            placeholderTextColor="#999"
            value={formData.circumcisionYear}
            onChangeText={(value) => updateField('circumcisionYear', value)}
          />

          <TextInput
            style={styles.input}
            placeholder="Current Location"
            placeholderTextColor="#999"
            value={formData.currentLocation}
            onChangeText={(value) => updateField('currentLocation', value)}
          />

          <TextInput
            style={styles.input}
            placeholder="Ancestral Location"
            placeholderTextColor="#999"
            value={formData.ancestralLocation}
            onChangeText={(value) => updateField('ancestralLocation', value)}
          />

          <TextInput
            style={[styles.input, styles.bioInput]}
            placeholder="Brief Bio"
            placeholderTextColor="#999"
            value={formData.bio}
            onChangeText={(value) => updateField('bio', value)}
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Create Account</Text>
          </TouchableOpacity>

          <Link href="/login" asChild>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Already have an account? Login</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 60,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#CCCCCC',
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    color: '#FFFFFF',
    fontSize: 16,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  registerButton: {
    backgroundColor: '#E67E22',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    padding: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#E67E22',
    fontSize: 16,
  },
});