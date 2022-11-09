import { ContactSupportOutlined } from '@mui/icons-material';
import {  useEffect,useState } from 'react';
import axios from '../../utils/axios';
import LoadingScreen from '../../components/LoadingScreen'
import {useNavigate} from 'react-router-dom'
// ---------------------------------------------------------------------


export default function StripeSuccess() {
  const navigate = useNavigate();

    useEffect(() => {
        const getSubscriptionStatus = async () => {
     
          const { data } = await axios.get("/subscription-status");

          console.log("DATA===",data)
          if (data.length=== 0) {
           navigate('/pricing')
          } else {
            navigate('/dashboard/overview')
          }
        };
        getSubscriptionStatus();
      }, []);

    return(
       <LoadingScreen/>
    )
}