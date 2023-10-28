import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator,TouchableOpacity, Text } from 'react-native';
import ProductItem from '../../components/ProductItem';
import { fetchProducts } from '../api';
import AddToCartButton from '../../components/AddToCartButton';

const ProductsScreen = ({ navigation }) => {
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
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.cartButton}
        onPress={() => navigation.navigate('Cart')}
        >
        <Text style={styles.cartButtonText}>Ver Carrinho</Text>
      </TouchableOpacity>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem product={item} onAddToCart={() => addToCart(item)} /> // Passe a função para o ProductItem
        )}
        contentContainerStyle={styles.container}
      />
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductsScreen;
