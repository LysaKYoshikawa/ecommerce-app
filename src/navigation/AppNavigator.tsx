import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ProductsScreen from '../screens/ProductsScreen';

const AppNavigator = createStackNavigator(
  {
    Products: {
      screen: ProductsScreen,
      navigationOptions: {
        title: 'Lista de Produtos',
      },
    },
  },
  {
    initialRouteName: 'Products',
  }
);

export default createAppContainer(AppNavigator);
