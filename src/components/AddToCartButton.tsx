import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AddToCartButtonProps {
  onPress: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default AddToCartButton;