import { Text, View, Button } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { connect } from 'react-redux';

import { fetchUser } from '../redux/users/userActions';
import { useEffect } from 'react';

const Main = ({ fetchUser }) => {
  const auth = getAuth();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View>
      <Text>User is logged</Text>
      <Button
        onPress={() => signOut(auth).then(() => console.log('success'))}
        title="Logout"
      ></Button>
    </View>
  );
};

const mapDispatchToProps = {
  fetchUser,
};

export default connect(null, mapDispatchToProps)(Main);
