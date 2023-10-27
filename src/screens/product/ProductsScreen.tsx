import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchProducts } from '../api'; // Importe a função do módulo de serviço

const ProductsScreen: React.FC = () => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      // Use a função fetchProducts para buscar os produtos da API
      // e atualizar o estado products
      async function loadProducts() {
        try {
          const data = await fetchProducts();
          setProducts(data);
        } catch (error) {
          console.error(error);
        }
      }
  
      loadProducts();
    }, []);
  
    return (
      <View>
        <Text>Lista de Produtos</Text>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>{item.title}</Text>
              {/* Renderize outras informações do produto, se necessário */}
            </View>
          )}
        />
      </View>
    );
  };
  
  export default ProductsScreen;
