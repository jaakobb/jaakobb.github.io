import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function TabPanel(props) {
    const { children, isActive, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={!isActive}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {isActive && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}