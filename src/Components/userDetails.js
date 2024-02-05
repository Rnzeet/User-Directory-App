import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const UserDetails = ({ user }) => {
  const data = user?.route?.params;

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.name}>{data?.name}</Text>
      <Text style={styles.username}>@{data?.username}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Email:</Text>
        <Text style={styles.detailValue}>{data?.email}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Phone:</Text>
        <Text style={styles.detailValue}>{data?.phone}</Text>
      </View>
      <View style={styles.detailContainerAdress}>
        <Text style={styles.detailLabel}>Address</Text>
        <View style={styles.line}></View>
        <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>City:</Text>
        <Text style={styles.detailValue}>{data?.address?.city}</Text>
        </View>
        <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>street:</Text>
        <Text style={styles.detailValue}>{data?.address?.street}</Text>
        </View>
        <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>suite:</Text>
        <Text style={styles.detailValue}>{data?.address?.suite}</Text>
        </View>
        <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>zipcode:</Text>
        <Text style={styles.detailValue}>{data?.address?.zipcode}</Text>
        </View>
      </View>
      <View style={styles.detailContainerAdress}>
        <Text style={styles.detailLabel}>Company</Text>
        <View style={styles.line}></View>
        <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Bs:</Text>
        <Text style={styles.detailValue}>{data?.company?.bs}</Text>
        </View>
        <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Catch Phrase :</Text>
        <Text style={styles.detailValue}>{data?.company?.catchPhrase}</Text>
        </View>
        <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Name:</Text>
        <Text style={styles.detailValue}>{data?.company?.name}</Text>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>Website:</Text>
        <Text style={styles.detailValue}>{data?.website}</Text>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 20,
    elevation:5,
    marginHorizontal:10,
    marginVertical:10
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333333',
  },
  username: {
    fontSize: 18,
    marginBottom: 12,
    color: '#666666',
  },
  detailContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailContainerAdress:{
    backgroundColor: 'lightyellow',
    marginBottom:8
  },
  detailLabel: {
    fontWeight: 'bold',
    marginRight: 8,
    color: '#333333',
  },
  detailValue: {
    fontSize: 16,
    color: '#666666',
    flex: 1,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 8,
  },
});

export default UserDetails;
