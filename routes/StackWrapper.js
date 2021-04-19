import { createAppContainer } from 'react-navigation' 
import { createStackNavigator } from 'react-navigation-stack'

// FOLLOWING FILES WILL BE SET-UP IN THIS NAVIGATION STACK

import CustTabsWrapper from './CustTabsWrapper'
import MechanicRequests from './MechanicRequests'
import SplashScreen from '../components/screens/splash' 
import CarImages from '../components/screens/CarImages'
import PreSignIn from '../components/screens/PreSignIn'
import PreSignUp from '../components/screens/PreSignUp'
import SignUpCust from '../components/screens/SignUpCust'
import SignUpMech from '../components/screens/SignUpMech'
import SignInCust from '../components/screens/SignInCust'
import SignInMech from '../components/screens/SignInMech'
import ProfileMech from '../components/screens/ProfileMech'
import CustLocation from '../components/screens/CustLocation'
import CarDescription from '../components/screens/CarDescription'
import ConfirmCustOrder from '../components/screens/ConfirmCustOrder'
import AcSpecifications from '../components/screens/AcSpecifications'
import SeeMechanicResponse from '../components/screens/SeeMechanicResponse'
import BrakeSpecifications from '../components/screens/BrakeSpecifications'
import OtherSpecifications from '../components/screens/OtherSpecifications'
import BatterySpecifications from '../components/screens/BatterySpecifications'
import PaintingSpecifications from '../components/screens/PaintingSpecifications'
import RadiatorSpecifications from '../components/screens/RadiatorSpecifications'
import AccidentSpecifications from '../components/screens/AccidentSpecifications'
import OilChangeSpecifications from '../components/screens/OilChangeSpecifications'
import TuningSpecifications from '../components/screens/TuningSpecifications'
import CleaningSpecifications from '../components/screens/CleaningSpecifications'
import TyreSpecifications from '../components/screens/TyreSpecifications'
import InspectionSpecifications from '../components/screens/InspectionSpecifications'
import PolishSpecifications from '../components/screens/PolishSpecifications'
import Payments from '../components/screens/Payments'
import RatingReviews from '../components/screens/RatingReviews'

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
            headerShown: false
        }
    },
    PreSignUp: {
        screen: PreSignUp, 
        navigationOptions: {
            title: 'MobileMechanic (Pre-Sign Up)',
            headerShown: false
        }
    },
    SignUpCust: {
        screen: SignUpCust, 
        navigationOptions: {
            title: 'Sign Up Customer (SignUpCust)', 
            headerShown: false
        }
    }, 
    SignUpMech: {
        screen: SignUpMech, 
        navigationOptions: {
            title: 'Sign Up Mechanic (SignUpMech)', 
            headerShown: false
        }
    }, 
    SignInCust: {
        screen: SignInCust, 
        navigationOptions: {
            title: '', 
            headerShown: false
        }
    }, 
    SignInMech: {
        screen: SignInMech, 
        navigationOptions: {
            title: 'Sign In Mechanic (SignInMech)', 
            headerShown: false
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
            headerShown: false
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
            title: 'Profile', 
            headerShown: false
            
        }
    },
    ConfirmCustOrder: {
        screen: ConfirmCustOrder, 
        navigationOptions: {
            headerShown: false 
        }
    }, 
    SeeMechanicResponse: {
        screen: SeeMechanicResponse, 
        navigationOptions: {
            headerShown: false 
        }
    }, 
    AcSpecifications: {
        screen: AcSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    PaintingSpecifications: {
        screen: PaintingSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    BrakeSpecifications: {
        screen: BrakeSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    AccidentSpecifications: {
        screen: AccidentSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    RadiatorSpecifications: {
        screen: RadiatorSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    OtherSpecifications: {
        screen: OtherSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    }, 
    OilChangeSpecifications: {
        screen: OilChangeSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    },
    PolishSpecifications: {
        screen: PolishSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    },
    CleaningSpecifications: {
        screen: CleaningSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    },
    TuningSpecifications: {
        screen: TuningSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    },
    TyreSpecifications: {
        screen: TyreSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    },
    InspectionSpecifications: {
        screen: InspectionSpecifications, 
        navigationOptions: {
            headerShown: false
        }
    },
    Payments: {
        screen: Payments, 
        navigationOptions: {
            headerShown: false
        }
    },
    RatingReviews: {
        screen: RatingReviews, 
        navigationOptions: {
            headerShown: false
        }
    },
}

const stack = createStackNavigator(screens);
const appContainer = createAppContainer(stack);

export default appContainer
