import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../pages/home.js';
import Plant from '../pages/plant.js';

const pages = {
    Home: {
        screen: Home
    },
    Plant: {
        screen: Plant
    }
}

const HomeStack = createStackNavigator(pages);

export default createAppContainer(HomeStack);