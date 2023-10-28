import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProductsScreen from '../screens/product/ProductsScreen';
import CartScreen from '../screens/checkout/CartScreen';

const AppNavigator = createStackNavigator(
  {
    Products: {
      screen: ProductsScreen,
      navigationOptions: {
        title: 'Lista de Produtos',
      },
    },
    Cart: { // Adicione uma nova rota para o carrinho
      screen: CartScreen,
      navigationOptions: {
        title: 'Carrinho de Compras',
      },
    },
  },
  {
    initialRouteName: 'Products',
  }
);

export default createAppContainer(AppNavigator);
