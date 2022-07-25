import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { MenuToggleProps } from './menu';

export default function Header(props: MenuToggleProps) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={props.handleMenuToggle}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          App de Ejemplo
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
