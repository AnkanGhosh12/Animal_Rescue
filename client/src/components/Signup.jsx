import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { useState } from 'react';

// Define styles for the background and transparent card
const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh', // Full viewport height
    background: `url('https://wallpaperaccess.com/full/343328.jpg') no-repeat center center/cover`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  card: {
    width: 400,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // White with 80% opacity
    backdropFilter: 'blur(10px)', // Optional: adds a blur effect
  },
};

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={styles.container}>
      <Card variant="outlined" style={styles.card}>
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            Welcome to app.. sign up below..
          </Typography>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            fullWidth={true}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            style={{ marginBottom: '1rem' }}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            fullWidth={true}
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            style={{ marginBottom: '1rem' }}
          />
          <Button
            variant="contained"
            onClick={() => {
              function callback2(data) {
                localStorage.setItem("token", data.token);
                window.location = "/";
              }
              function callback1(res) {
                res.json().then(callback2);
              }
              fetch("http://localhost:3000/admin/signup", {
                method: "POST",
                body: JSON.stringify({
                  username: email,
                  password: password
                }),
                headers: {
                  "Content-Type": "application/json"
                }
              })
                .then(callback1);
            }}
          >
            Sign up
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Signup;
