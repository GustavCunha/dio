import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/Main';
import SkillScreen from './screens/Skill';

export type RootStackParamList = {
    Main: undefined;
    Skills: undefined;
};

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
    return (
        <Navigator initialRouteName="Main" screenOptions={{headerShown: false}}>
            <Screen 
                name="Main"         
                component={MainScreen} 
            />
            <Screen 
                name="Skills"       
                component={SkillScreen} 
            />
        </Navigator>
    );
}