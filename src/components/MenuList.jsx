import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const data = [
  { icon: <span style={{ backgroundColor: '#b84d4d', color: '#fff', borderRadius: '50%', padding: '10px', marginRight: '10px' }}>🎯</span>, title: 'Goals' },
  { icon: <span style={{ backgroundColor: '#4086ff', color: '#fff', borderRadius: '50%', padding: '10px', marginRight: '10px' }}>🍔</span>, title: 'Popular Dishes' },
  { icon: <span style={{ backgroundColor: '#2f9e82', color: '#fff', borderRadius: '50%', padding: '10px', marginRight: '10px' }}>🍽️</span>, title: 'Menus' },
];

const MenuList = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {data.map((item, index) => (
        <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
          <Typography variant="h1" sx={{ display: 'flex', alignItems: 'center' , p:1.2}}>
            {item.icon}
            {item.title}
          </Typography>
          <ArrowForwardIosIcon />
        </Box>
      ))}
    </Box>
  );
};

export default MenuList;