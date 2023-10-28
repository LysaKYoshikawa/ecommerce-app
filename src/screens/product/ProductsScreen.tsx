import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import ProductItem from '../../components/ProductItem';
import { fetchProducts } from '../api';
import AddToCartButton from '../../components/AddToCartButton';

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // Verificar se o produto já está no carrinho
    if (!cart.some((item) => item.id === product.id)) {
      // Se o produto não estiver no carrinho, adicione-o
      setCart([...cart, product]);
    } else {
      // Se o produto já estiver no carrinho, atualize a quantidade ou realize alguma ação desejada
      // Por exemplo, você pode criar uma cópia do carrinho com a quantidade atualizada
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 } // Atualize a quantidade
          : item
      );
      setCart(updatedCart);
    }
  };
  

  useEffect(() => {
    async function fetchProductsData() {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
  
    fetchProductsData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductItem product={item} onAddToCart={() => addToCart(item)} /> // Passe a função para o ProductItem
      )}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductsScreen;
