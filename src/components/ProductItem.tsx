import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import AddToCartButton from './AddToCartButton';

interface ProductItemProps {
  product: any; // Defina o tipo de produto apropriado
  onAddToCart: () => void; // Função para adicionar ao carrinho
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onAddToCart }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Price: ${product.price}</Text>
      <AddToCartButton onPress={onAddToCart} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'green',
    marginTop: 5,
  },
});

export default ProductItem;
