import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TopBar = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className="text-end">
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          sx={{
            display: 'flex',
            flexDirection: 'row-reverse',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
          }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction icon={<RestoreIcon />} />
          <BottomNavigationAction icon={<FavoriteIcon />} />
          <BottomNavigationAction icon={<LocationOnIcon />} />
        </BottomNavigation>
      </Box>
    </div>
  )
}

export default TopBar;