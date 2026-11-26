import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../../components/PrimaryButton';
import { colors } from '../../constants/theme';
import { useAuth } from '../../hooks/AuthContext';

export default function ProfileScreen() {
  const { user, logOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.name}>{user?.name}</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <PrimaryButton title="Log out" variant="outlined" onPress={logOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 12, backgroundColor: colors.background },
  title: { fontSize: 26, fontWeight: '700', color: colors.text },
  name: { fontSize: 20, fontWeight: '600', color: colors.text },
  email: { fontSize: 15, color: colors.textMuted, marginBottom: 12 },
});