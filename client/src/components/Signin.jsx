import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import { useState } from 'react';

const styles = {
  container: {
    position: 'relative',
    height: '100vh', // Full viewport height
    background: `url('https://wallpaperaccess.com/full/546539.jpg') no-repeat center center/cover`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 400,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
  },
};

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={styles.container}>
      <Card variant="outlined" style={styles.card}>
        <Typography variant="h6" align="center">
          Welcome to app.. sign in below..
        </Typography>
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
        />
        <br />
        <br />
        <Button
          variant="contained"
          onClick={() => {
            function callback2(data) {
              localStorage.setItem('token', data.token);
              window.location = '/';
            }
            function callback1(res) {
              res.json().then(callback2);
            }
            fetch('http://localhost:3000/admin/login', {
              method: 'POST',
              body: JSON.stringify({
                username: email,
                password: password,
              }),
              headers: {
                'content-type': 'application/json',
              },
            }).then(callback1);
          }}
        >
          Sign in
        </Button>
      </Card>
    </div>
  );
}

export default Signin;




