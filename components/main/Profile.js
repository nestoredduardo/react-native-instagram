import { Text, View, Button } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { connect } from 'react-redux';

const Profile = ({ currentUser }) => {
  const auth = getAuth();

  return (
    <View>
      <Text>Settings</Text>
      {currentUser && <Text> {currentUser.name} is logged</Text>}
      <Button
        onPress={() => signOut(auth).then(() => console.log('success'))}
        title="Logout"
      />
    </View>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    currentUser: users.currentUser,
  };
};

export default connect(mapStateToProps, null)(Profile);
