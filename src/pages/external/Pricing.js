import {useEffect } from 'react';
// material
import { styled } from '@mui/material/styles';
import { Box, Grid, Switch, Container, Typography, Stack } from '@mui/material';
// components
import Page from '../../components/Page';
import { PricingPlanCard} from '../../components/_external-pages/pricing';

//
import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../../assets';
import data from "@iconify/icons-eva/arrow-ios-upward-fill";

// --------------------------------------------------------------------

import { useDispatch, useSelector } from '../../redux/store';
import { getPriceList } from '../../redux/slices/pricing';

import { set } from 'lodash';

// ----------------------------------------------------------------------

export default function Pricing({userSubscriptions}) {
  
  const { priceList,isLoading} = useSelector((state) => state.price);
  const dispatch=useDispatch()
  
  //Get prices List
  useEffect(()=>{
      dispatch(getPriceList())
  },[dispatch])

  
 
  const PLANS = [
    {
      subscription:priceList[0]?.nickname,
      icon: <PlanStarterIcon />,
      price:(priceList[0]?.unit_amount/100).toLocaleString("in-US",{
        currency:"USD"
       }),
      caption: 'monthly',
      lists: [
        { text: '3 prototypes', isAvailable: true },
        { text: '3 boards', isAvailable: true },
        { text: 'Up to 5 team members', isAvailable: true },
        { text: 'Advanced security', isAvailable: false },
        { text: 'Permissions & workflows', isAvailable: false }
      ],
      labelAction: 'buy monthly'
    },
    {
      subscription: priceList[1]?.nickname,
      icon: <PlanStarterIcon />,
      price:(priceList[1]?.unit_amount/100).toLocaleString("in-US",{
        currency:"USD"
       }),
      caption: '6-months',
      lists: [
        { text: '3 prototypes', isAvailable: true },
        { text: '3 boards', isAvailable: true },
        { text: 'Up to 5 team members', isAvailable: true },
        { text: 'Advanced security', isAvailable: false },
        { text: 'Permissions & workflows', isAvailable: false }
      ],
      labelAction: 'buy six months'
    },
    {
      subscription: priceList[2]?.nickname,
      icon: <PlanPremiumIcon />,
      price:(priceList[2]?.unit_amount/100).toLocaleString("in-US",{
        currency:"USD"
       }),
      caption: 'yearly',
      lists: [
        { text: '3 prototypes', isAvailable: true },
        { text: '3 boards', isAvailable: true },
        { text: 'Up to 5 team members', isAvailable: true },
        { text: 'Advanced security', isAvailable: true },
        { text: 'Permissions & workflows', isAvailable: true }
      ],
      labelAction: 'buy yearly'
    }
  ];
  const RootStyle = styled(Page)(({ theme }) => ({
    minHeight: '100%',
    paddingTop: theme.spacing(15),
    paddingBottom: theme.spacing(10)
  }));

  return (
    <RootStyle title="Pricing | Minimal-UI">
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" paragraph>
          Fleet Management System
        </Typography>
        <Typography align="center" sx={{ color: 'text.secondary' }}>
          Choose your plan and relax your journey
        </Typography>

        <Box sx={{ my: 5 }}>
          <Stack direction="row" alignItems="center" justifyContent="flex-end">
            <Typography variant="overline" sx={{ mr: 1.5 }}>
              MONTHLY
            </Typography>
            <Switch />
            <Typography variant="overline" sx={{ ml: 1.5 }}>
              month (save 10%)
            </Typography>
          </Stack>
          <Typography variant="caption" align="right" sx={{ color: 'text.secondary', display: 'block' }}>
            * Plus applicable taxes
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {PLANS.map((card, index) => (
            <Grid item xs={12} md={4} key={card.subscription}> 
                <PricingPlanCard card={card} index={index} 
                 userSubscriptions={userSubscriptions}
                 />
            </Grid>
            
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
