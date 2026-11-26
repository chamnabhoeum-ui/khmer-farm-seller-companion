import { View, Text, StyleSheet } from 'react-native';
import { colors, radius } from '../constants/theme';

export default function ProductCard({ name, price, unit, stock }) {
  return (
    <View style={styles.card}>
      <View style={styles.photo} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>${price.toFixed(2)} / {unit}</Text>
        {stock != null && <Text style={styles.stock}>{stock} {unit} in stock</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', gap: 14, backgroundColor: colors.card, borderRadius: radius.lg, padding: 12, borderWidth: 1, borderColor: '#E2E8DF' },
  photo: { width: 75, height: 75, borderRadius: radius.md, backgroundColor: colors.placeholder },
  info: { flex: 1, justifyContent: 'center', gap: 4 },
  name: { fontSize: 17, fontWeight: '600', color: colors.text },
  price: { fontSize: 15, color: colors.textMuted },
  stock: { alignSelf: 'flex-start', fontSize: 12, fontWeight: '600', color: colors.primaryDark, backgroundColor: colors.chipGreen, borderRadius: radius.sm, paddingHorizontal: 8, paddingVertical: 3 },
});