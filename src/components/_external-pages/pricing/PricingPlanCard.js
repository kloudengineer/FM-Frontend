import {useState,useEffect,useContext} from 'react'
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { Link as RouterLink } from 'react-router-dom';
import checkmarkFill from '@iconify/icons-eva/checkmark-fill';
// material
import { styled } from '@mui/material/styles';
import { Card, Button, Typography, Box, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD,PATH_PAGE ,PATH_AUTH} from '../../../routes/paths';
import Label from '../../Label';

import { useNavigate, useRoutes, useLocation } from 'react-router-dom';

import axios from '../../../utils/axios';
// ----------------------------------------------------------------------
import {getSubscriptionStatus}from '../../../redux/slices/subscriptions';
import { useDispatch, useSelector } from '../../../redux/store';

const RootStyle = styled(Card)(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3),
  [theme.breakpoints.up(414)]: {
    padding: theme.spacing(5)
  }
}));

// ----------------------------------------------------------------------

PricingPlanCard.propTypes = {
  index: PropTypes.number,
  card: PropTypes.object
};

export default function PricingPlanCard({ card, index}) {

  const navigate=useNavigate()
  const [userSubscriptions,setUserSubscriptions]=useState([])
  
  const {subStatusList} = useSelector((state) => state.subscription);
  const { priceList,isLoading} = useSelector((state) => state.price);
  
  const dispatch=useDispatch()

  const { subscription, icon, price, caption, lists, labelAction } = card;
  


  useEffect(()=>{
    dispatch(getSubscriptionStatus())
  },[dispatch])
  

  useEffect(() => {
    let result = [];
    const check = () =>
     subStatusList.subscriptions?.map((sub) => {
      result.push(sub?.plan.id)
      });
    check();
    setUserSubscriptions(result);
  }, [subStatusList.subscriptions]);

  
    const handleSubscription=async(e,priceList)=>{
      e.preventDefault()  
      const priceId=[priceList[0]?.id,priceList[1]?.id, priceList[2]?.id]

      //checks if user subscribed
      if (userSubscriptions.includes(index===0 && priceId[0] || index===1 && priceId[1] || index===2 && priceId[2])){
          navigate('/dashboard/overview');
        return;
      }
      
      //create-subscription
      const { data } = await axios.post("/create-subscription", {
            priceId:index==0 && priceId[0] || index==1 && priceId[1] || index==2 && priceId[2]
          });
          window.open(data)
}

  return (
    <RootStyle>

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        {subscription}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
        {index === 0 || index === 1 || index === 2 ? (
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            $
          </Typography>
        ) : (
          ''
        )}
        <Typography variant="h2" sx={{ mx: 1 }}>
          {price}
        </Typography>
        {index === 0 ? (
          <Typography
          gutterBottom
          component="span"
          variant="subtitle2"
          sx={{
            alignSelf: 'flex-end',
              color: 'text.secondary'
            }}
          >
            /mo
          </Typography>
        ) :(
          ''
        )}
        {index === 1 ? (
          <Typography
          gutterBottom
          component="span"
          variant="subtitle2"
          sx={{
            alignSelf: 'flex-end',
            color: 'text.secondary'
            }}
          >
            /6-mon
          </Typography>
        ) : (
          ''
        )}
        {index === 2 ? (
          <Typography
          gutterBottom
            component="span"
            variant="subtitle2"
            sx={{
              alignSelf: 'flex-end',
              color: 'text.secondary'
            }}
          >
            /yr
          </Typography>
        ) : (
          ''
        )}
      </Box>

      <Typography
        variant="caption"
        sx={{
          color: 'primary.main',
          textTransform: 'capitalize'
        }}
      >
        {caption}
      </Typography>

      <Box sx={{ width: 80, height: 80, mt: 3 }}>{icon}</Box>

      <Stack component="ul" spacing={2} sx={{ my: 5, width: 1 }}>
        {lists.map((item) => (
          <Stack
            key={item.text}
            component="li"
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ typography: 'body2', color: item.isAvailable ? 'text.primary' : 'text.disabled' }}
          >
            <Box component={Icon} icon={checkmarkFill} sx={{ width: 20, height: 20 }} />
            <Typography variant="body2">{item.text}</Typography>
          </Stack>
        ))}
      </Stack>

      <Button
       onClick={
        (e)=>handleSubscription(e,priceList)}
        fullWidth
        size="large"
        variant={index===0?'outlined':'contained'}
      >
        {userSubscriptions.includes(index===0 && priceList[0]?.id || index===1 && priceList[1]?.id || index===2 && priceList[2]?.id)
                ? "Access plan" : labelAction}
      </Button>
    </RootStyle>
  );
}
