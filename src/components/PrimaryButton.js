import { Pressable, Text, StyleSheet } from 'react-native';
import { colors } from '../constants/theme';

export default function PrimaryButton({ title, onPress, variant = 'filled' }) {
  const outlined = variant === 'outlined';
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, outlined && styles.outlined, pressed && styles.pressed]}
    >
      <Text style={[styles.text, outlined && styles.textOutlined]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: { height: 52, borderRadius: 14, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  outlined: { backgroundColor: colors.card, borderWidth: 1.5, borderColor: colors.primary },
  pressed: { opacity: 0.85 },
  text: { color: '#FFFFFF', fontSize: 17, fontWeight: '600' },
  textOutlined: { color: colors.primary },
});