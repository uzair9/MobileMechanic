import { createAppContainer } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack'

// FOLLOWING FILES WILL BE SET-UP IN THIS NAVIGATION STACK

import PreSignIn from '../components/screens/PreSignIn'
import PreSignUp from '../components/screens/PreSignUp'
import SignUpCust from '../components/screens/SignUpCust'
import SignUpMech from '../components/screens/SignUpMech'
import SignInCust from '../components/screens/SignInCust'
import SignInMech from '../components/screens/SignInMech'
import TabAppCust from '../components/screens/TabAppCust'
import SplashScreen from '../components/screens/splash' 
import CustTabsWrapper from './CustTabsWrapper'
import BatterySpecifications from '../components/screens/BatterySpecifications'
import MechanicRequests from './MechanicRequests'
import ProfileMech from '../components/screens/ProfileMech'
import CarImages from '../components/screens/CarImages'
import CarDescription from '../components/screens/CarDescription'
import CustLocation from '../components/screens/CustLocation'
const screens = {
    SplashScreen: {
        screen: SplashScreen, 
        navigationOptions: {
            headerShown: false
        }
    },
    PreSignIn: {
        screen: PreSignIn, 
        navigationOptions: {
            title: 'MobileMechanic (Pre-Sign In)', 
            headerShown: false
        }
    },
    PreSignUp: {
        screen: PreSignUp, 
        navigationOptions: {
            title: 'MobileMechanic (Pre-Sign Up)',
        }
    },
    SignUpCust: {
        screen: SignUpCust, 
        navigationOptions: {
            title: 'Sign Up Customer (SignUpCust)'
        }
    }, 
    SignUpMech: {
        screen: SignUpMech, 
        navigationOptions: {
            title: 'Sign Up Mechanic (SignUpMech)'
        }
    }, 
    SignInCust: {
        screen: SignInCust, 
        navigationOptions: {
            title: 'Sign In Customer (SignInCust)'
        }
    }, 
    SignInMech: {
        screen: SignInMech, 
        navigationOptions: {
            title: 'Sign In Mechanic (SignInMech)'
        }
    }, 
    CustTabsWrapper: {
        screen: CustTabsWrapper, 
        navigationOptions: {
            headerShown: false
        }
    },
    BatterySpecifications: {
        screen: BatterySpecifications,
        navigationOptions: {
            headerShown: true
        }
    },
    CarImages: {
        screen: CarImages, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    CarDescription: {
        screen: CarDescription, 
        navigationOptions: {
            headerShown: false 
        }
    }, 
    CustLocation: {
        screen: CustLocation, 
        navigationOptions: {
            headerShown: false
        }
    },
    MechanicRequests: {
        screen: MechanicRequests, 
        navigationOptions: {
            headerShown: false
        }
    },

    ProfileMech: {
        screen: ProfileMech, 
        navigationOptions: {
            title: 'Profile'
            
        }
    },
}

const stack = createStackNavigator(screens);
const appContainer = createAppContainer(stack);

export default appContainer
