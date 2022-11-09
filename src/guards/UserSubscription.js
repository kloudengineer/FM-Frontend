import React,{ useState, useEffect} from 'react';

//router
import { Navigate, useLocation } from 'react-router-dom';
//pricing
import Pricing from '../pages/external/Pricing';
//subscription
import {getSubscriptions}from '../redux/slices/subscriptions';
import { useDispatch, useSelector } from '../redux/store';

//make sure if the user subscribed or not
const  UserSubscription=({children})=> {
    const [userSubscription,setUserSubscription]=useState([])
    console.log("Subscribed:",userSubscription)

    const { pathname } = useLocation();
    const [requestedLocation, setRequestedLocation] = useState(null);
    const dispatch=useDispatch()    
    const {subscriptionList,isLoading} = useSelector((state) => state.subscription);
  
   
    
    let result = [];
    const check = () =>
    subscriptionList?.map((sub) => {
      result.push(sub)
    });
    
    
    useEffect(() => {
      dispatch(getSubscriptions())
      check();
      setUserSubscription(result);
    
    }, [subscriptionList,dispatch,getSubscriptions]);

  
    console.log("subscribed::",userSubscription)
    
  
    if (userSubscription==0) {
      if (pathname !== requestedLocation) {
        setRequestedLocation(pathname);
      }
      return <Pricing />;
    }
  
    if (requestedLocation && pathname !== requestedLocation) {
      setRequestedLocation(null);
      return <Navigate to={requestedLocation} />;
    }
    return <>{children}</>;

  }

  export default UserSubscription