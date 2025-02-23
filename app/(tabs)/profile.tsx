import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DUMMY_PROFILE = {
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
  coverPhoto: 'https://images.unsplash.com/photo-1523939158338-1708c76c0c4a?w=800',
  tribe: 'Maasai',
  clan: 'Iltalala',
  circumcisionYear: '2015/2016',
  location: 'Nairobi, Kenya',
  ancestralLocation: 'Narok, Kenya',
  bio: 'Proud Maasai warrior dedicated to preserving and sharing our rich cultural heritage. Community elder and traditional knowledge keeper.',
  stats: {
    posts: 45,
    followers: 1234,
    following: 890,
  },
};

export default function Profile() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.coverPhotoContainer}>
        <Image source={{ uri: DUMMY_PROFILE.coverPhoto }} style={styles.coverPhoto} />
        <TouchableOpacity style={styles.editCoverButton}>
          <Ionicons name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: DUMMY_PROFILE.avatar }} style={styles.avatar} />
          <TouchableOpacity style={styles.editAvatarButton}>
            <Ionicons name="camera" size={20} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.name}>{DUMMY_PROFILE.name}</Text>
        <Text style={styles.tribe}>{DUMMY_PROFILE.tribe} • {DUMMY_PROFILE.clan}</Text>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{DUMMY_PROFILE.stats.posts}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{DUMMY_PROFILE.stats.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{DUMMY_PROFILE.stats.following}</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.bio}>{DUMMY_PROFILE.bio}</Text>

        <View style={styles.infoItem}>
          <Ionicons name="calendar-outline" size={20} color="#666" />
          <Text style={styles.infoText}>Circumcision Year: {DUMMY_PROFILE.circumcisionYear}</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="location-outline" size={20} color="#666" />
          <Text style={styles.infoText}>Current: {DUMMY_PROFILE.location}</Text>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="home-outline" size={20} color="#666" />
          <Text style={styles.infoText}>Ancestral: {DUMMY_PROFILE.ancestralLocation}</Text>
        </View>
      </View>

      <View style={styles.settingsSection}>
        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="settings-outline" size={24} color="#666" />
          <Text style={styles.settingsButtonText}>Settings</Text>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="shield-checkmark-outline" size={24} color="#666" />
          <Text style={styles.settingsButtonText}>Privacy</Text>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsButton}>
          <Ionicons name="help-circle-outline" size={24} color="#666" />
          <Text style={styles.settingsButtonText}>Help & Support</Text>
          <Ionicons name="chevron-forward" size={24} color="#666" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  coverPhotoContainer: {
    height: 200,
    position: 'relative',
  },
  coverPhoto: {
    width: '100%',
    height: '100%',
  },
  editCoverButton: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    padding: 8,
  },
  profileHeader: {
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatarContainer: {
    position: 'relative',
    marginTop: -50,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#fff',
  },
  editAvatarButton: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    padding: 6,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  tribe: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#666',
    fontSize: 14,
  },
  editProfileButton: {
    backgroundColor: '#E67E22',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  editProfileButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  infoSection: {
    backgroundColor: '#fff',
    padding: 15,
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
    marginBottom: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 14,
  },
  settingsSection: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingVertical: 10,
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingsButtonText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#444',
  },
});