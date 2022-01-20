import { Text, View, Button } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { connect } from 'react-redux';

import { fetchUser } from '../redux/users/userActions';
import { useEffect } from 'react';

const Main = ({ fetchUser, currentUser }) => {
  const auth = getAuth();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View>
      {currentUser && <Text> {currentUser.name} is logged</Text>}
      <Button
        onPress={() => signOut(auth).then(() => console.log('success'))}
        title="Logout"
      ></Button>
    </View>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    currentUser: users.currentUser,
  };
};

const mapDispatchToProps = {
  fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
