import './Navbar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Navbar() {

  return (
    <AppBar position="static" className="Navbar">
      <Toolbar>
        <Typography variant="h6" className="Navbar-title">
          whoisbreaking
        </Typography>
      </Toolbar>
    </AppBar>
  )

}