import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const UserCard = ({ user }) => {
  const navigation = useNavigation();
  const onPress=()=>{
    navigation.navigate('Details',user);
  }
  return (
    <TouchableOpacity style={styles.cardContainer} activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.name}>{user?.name}</Text>
        <Text style={styles.username}>@{user?.username}</Text>
        <View style={styles.details}>
          <Text style={styles.detailLabel}>Email:</Text>
          <Text style={styles.detailValue}>{user?.email}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailLabel}>Phone:</Text>
          <Text style={styles.detailValue}>{user?.phone}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailLabel}>Website:</Text>
          <Text style={styles.detailValue}>{user?.website}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    elevation:5,
  },
  container: {
    backgroundColor: '#F4F4F4',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  username: {
    fontSize: 16,
    marginBottom: 8,
    color: '#666',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
    color: '#333',
    width: 70,
  },
  detailValue: {
    flex: 1,
    fontSize: 16,
    color: '#666',
  },
});

export default UserCard;

