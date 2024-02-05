import React from 'react';
import { View} from 'react-native';
import UserDetails from '../Components/userDetails';

const DetailsScreen = (user) => {
  return (
    <View >
  <UserDetails user={user}/>
    </View>
  );
};

export default DetailsScreen;

