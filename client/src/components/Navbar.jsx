import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Navbar.css'; // Importing the CSS file

function Navbar() {
  const navigate = useNavigate();
  const [User, setUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
      }
    })
      .then(response => response.json())
      .then(data => setUser(data.username))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="navbar">
      <Typography
        variant="h4"
        color="primary"
        className="navbar-logo" // Apply the CSS class
        onClick={() => navigate('/')}
      >
        MyApp
      </Typography>
      <div style={{ display: 'flex', gap: '10px' }}>
        
        {User && (
          <>
          <Button
          variant="contained"
          className="navbar-button" // Apply the CSS class
          onClick={() => navigate('/')}
        >
          Home
        </Button>
            <Button
              variant="contained"
              className="navbar-button" // Apply the CSS class
              onClick={() => {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    console.log(position);
                    navigate('/imageupload');
                  },
                  () => {
                    alert('Please allow location access');
                  }
                );
              }}
            >
              Upload
            </Button>
            <Button 
              variant="contained" 
              className="navbar-button" 
              onClick={() => navigate('/aboutt')}
            >
              About Us
            </Button>
            <Button variant="contained" className="navbar-button">
              Donate
            </Button>
            <Button
              variant="contained"
              className="navbar-button"
              onClick={() => {
                localStorage.removeItem("token");
                window.location = "/";
              }}
            >
              Logout
            </Button>
          </>
        )}
        {!User && (
          <>
            <Button
              variant="contained"
              className="navbar-button"
              onClick={() => navigate('/Signup')}
            >
              Signup
            </Button>
            <Button
              variant="contained"
              className="navbar-button"
              onClick={() => navigate('/Signin')}
            >
              Signin
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
