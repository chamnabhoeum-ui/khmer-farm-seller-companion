import { View, Text, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';
import PrimaryButton from '../../components/PrimaryButton';
import { colors } from '../../constants/theme';

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My products</Text>
      <ProductCard name="Mangoes" price={1.2} unit="kg" stock={45} />
      <ProductCard name="Bananas" price={0.6} unit="kg" stock={120} />
      <PrimaryButton title="Add product" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 12, backgroundColor: colors.background },
  title: { fontSize: 26, fontWeight: '700', color: colors.text },
});