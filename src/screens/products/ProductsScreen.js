import { useCallback, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';;
import ProductCard from '../../components/ProductCard';
import PrimaryButton from '../../components/PrimaryButton';
import { colors } from '../../constants/theme';
import { useAuth } from '../../hooks/AuthContext';
import { listProducts } from '../../services/products';

export default function ProductsScreen() {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useFocusEffect(
    useCallback(() => {
      let active = true;
      setLoading(true);
      listProducts(user.$id)
        .then((rows) => {
          if (active) {
            setProducts(rows);
            setError('');
          }
        })
        .catch((e) => active && setError(e.message))
        .finally(() => active && setLoading(false));
      return () => {
        active = false;
      };
    }, [user.$id])
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My products</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {loading ? (
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.$id}
          contentContainerStyle={{ gap: 12 }}
          renderItem={({ item }) => <ProductCard name={item.name} price={item.price} unit={item.unit} />}
          ListEmptyComponent={<Text style={styles.empty}>No products yet. Tap "Add product" to create your first one.</Text>}
        />
      )}
      <PrimaryButton title="Add product" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 12, backgroundColor: colors.background },
  title: { fontSize: 26, fontWeight: '700', color: colors.text },
  error: { color: colors.danger },
  empty: { color: colors.textMuted, fontSize: 15, marginTop: 8 },
});