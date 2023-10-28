import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface AddToCartButtonProps {
  onPress: () => void; // Adicione essa prop
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default AddToCartButton;

