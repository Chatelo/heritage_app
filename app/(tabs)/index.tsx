import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DUMMY_POSTS = [
  {
    id: '1',
    user: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      tribe: 'Maasai',
    },
    content: 'Just attended an amazing traditional ceremony. The energy was incredible! 🎉',
    image: 'https://images.unsplash.com/photo-1523939158338-1708c76c0c4a?w=500',
    likes: 124,
    comments: 23,
    shares: 12,
    timestamp: '2h ago',
  },
  {
    id: '2',
    user: {
      name: 'Sarah Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      tribe: 'Kikuyu',
    },
    content: 'Learning traditional beadwork from my grandmother. These skills are precious! 💝',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=500',
    likes: 89,
    comments: 15,
    shares: 5,
    timestamp: '4h ago',
  },
];

export default function Feed() {
  const renderPost = ({ item }) => (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.user.avatar }} style={styles.avatar} />
        <View>
          <Text style={styles.userName}>{item.user.name}</Text>
          <Text style={styles.userTribe}>{item.user.tribe}</Text>
        </View>
        <TouchableOpacity style={styles.moreButton}>
          <Ionicons name="ellipsis-horizontal" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <Text style={styles.content}>{item.content}</Text>
      
      <Image source={{ uri: item.image }} style={styles.postImage} />

      <View style={styles.interactions}>
        <TouchableOpacity style={styles.interactionButton}>
          <Ionicons name="heart-outline" size={24} color="#666" />
          <Text style={styles.interactionText}>{item.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.interactionButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#666" />
          <Text style={styles.interactionText}>{item.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.interactionButton}>
          <Ionicons name="share-outline" size={24} color="#666" />
          <Text style={styles.interactionText}>{item.shares}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_POSTS}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  post: {
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    padding: 15,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  userTribe: {
    color: '#666',
    fontSize: 14,
  },
  moreButton: {
    marginLeft: 'auto',
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 22,
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  interactions: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  interactionText: {
    marginLeft: 5,
    color: '#666',
  },
  timestamp: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
});