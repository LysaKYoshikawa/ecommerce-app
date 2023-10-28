// src/screens/checkout/CartScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const CartScreen = ({ cart, updateCart, removeFromCart }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho de Compras</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text>{item.title}</Text>
            <Text>Quantidade: {item.quantity}</Text>
            <Text>Preço total: ${item.price * item.quantity}</Text>
            <View style={styles.cartActions}>
              <TouchableOpacity onPress={() => updateCart(item.id, -1)}>
                <Text style={styles.actionButton}>-</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => updateCart(item.id, 1)}>
                <Text style={styles.actionButton}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                <Text style={styles.actionButton}>Remover</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <Text style={styles.total}>Total: ${totalPrice}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default CartScreen;
