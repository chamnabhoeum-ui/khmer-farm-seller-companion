import { useState } from 'react';
import { Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextField from '../../components/TextField';
import PrimaryButton from '../../components/PrimaryButton';
import { colors } from '../../constants/theme';
import { useAuth } from '../../hooks/AuthContext';

export default function AuthScreen() {
  const { signUp, logIn } = useAuth();
  const [mode, setMode] = useState('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  const isSignUp = mode === 'signup';

  async function submit() {
    setError('');
    if (!email.trim() || !password) {
      setError('Please enter your email and password.');
      return;
    }
    if (isSignUp && !name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (isSignUp && password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }
    setBusy(true);
    try {
      if (isSignUp) await signUp(name.trim(), email.trim(), password);
      else await logIn(email.trim(), password);
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>{isSignUp ? 'Create account' : 'Welcome back'}</Text>
        <Text style={styles.subtitle}>Khmer Farm Seller Companion</Text>

        {isSignUp && <TextField label="Your name" value={name} onChangeText={setName} placeholder="Your name" />}
        <TextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          placeholder="you@example.com"
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextField
          label="Password"
          value={password}
          onChangeText={setPassword}
          placeholder="At least 8 characters"
          secureTextEntry
          autoCapitalize="none"
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <PrimaryButton title={busy ? 'Please wait...' : isSignUp ? 'Sign up' : 'Log in'} onPress={busy ? undefined : submit} />

        <Pressable onPress={() => { setError(''); setMode(isSignUp ? 'login' : 'signup'); }}>
          <Text style={styles.switch}>
            {isSignUp ? 'Already have an account? Log in' : "New here? Create an account"}
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  container: { padding: 24, gap: 16 },
  title: { fontSize: 28, fontWeight: '700', color: colors.text, marginTop: 24 },
  subtitle: { fontSize: 15, color: colors.textMuted, marginBottom: 8 },
  error: { color: colors.danger, fontSize: 14 },
  switch: { textAlign: 'center', color: colors.primary, fontSize: 15, fontWeight: '600', marginTop: 8 },
});