import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

import users from '../data/users';

export default (props) => {
  function getUserItem({item: user}) {
    return (
      <ListItem
        leftAvatar={{source: {uri: user.avatarUrl}}}
        key={user.id}
        title={user.name}
        subtitle={user.email}
        bottomDivider
        onPress={() => props.navigation.navigate('UserForm')}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};
