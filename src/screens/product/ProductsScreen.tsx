// No seu arquivo ProductsScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity, Text } from 'react-native';
import ProductItem from '../../components/ProductItem';
import { fetchProducts } from '../api';

const ProductsScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); // Inicialize o estado do carrinho

  const updateCart = (productId, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
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
        onPress={() => navigation.navigate('Cart', { cart, updateCart, removeFromCart })} // Passe o cart e as funções para a tela do carrinho
      >
        <Text style={styles.cartButtonText}>Ver Carrinho</Text>
      </TouchableOpacity>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductItem product={item} onAddToCart={() => updateCart(item.id, 1)} />
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


// import React, { useEffect, useState } from 'react';
// import { View, FlatList, StyleSheet, ActivityIndicator,TouchableOpacity, Text } from 'react-native';
// import ProductItem from '../../components/ProductItem';
// import { fetchProducts } from '../api';
// import AddToCartButton from '../../components/AddToCartButton';

// const ProductsScreen = ({ navigation }) => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     // Verificar se o produto já está no carrinho
//     const productIndex = cart.findIndex((item) => item.id === product.id);
  
//     if (productIndex === -1) {
//       // Se o produto não estiver no carrinho, adicione-o
//       setCart([...cart, { ...product, quantity: 1 }]);
//     } else {
//       // Se o produto já estiver no carrinho, atualize a quantidade
//       const updatedCart = [...cart];
//       updatedCart[productIndex].quantity += 1;
//       setCart(updatedCart);
//     }
//   };

//   const updateCart = (productId, quantity) => {
//     const updatedCart = cart.map((item) =>
//       item.id === productId
//         ? { ...item, quantity: item.quantity + quantity }
//         : item
//     );
//     setCart(updatedCart);
//   };
  
//   const removeFromCart = (productId) => {
//     // Remova o produto do carrinho com base no ID
//     const updatedCart = cart.filter((item) => item.id !== productId);
//     setCart(updatedCart);
//   };
  
  

//   useEffect(() => {
//     async function fetchProductsData() {
//       try {
//         const data = await fetchProducts();
//         setProducts(data);
//         setLoading(false);
//       } catch (error) {
//         console.error(error);
//       }
//     }
  
//     fetchProductsData();
//   }, []);

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="blue" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.cartButton}
//         onPress={() => navigation.navigate('Cart')}
//         >
//         <Text style={styles.cartButtonText}>Ver Carrinho</Text>
//       </TouchableOpacity>

//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <ProductItem product={item} onAddToCart={() => addToCart(item)} /> // Passe a função para o ProductItem
//         )}
//         contentContainerStyle={styles.container}
//       />
//     </View>
    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
//   cartButton: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   cartButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default ProductsScreen;
