import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import rescueImage from '../assets/OIPS.jpeg'; // Make sure to add a relevant image

const styles = {
  container: {
    position: 'relative',
    height: '100vh', // Full viewport height
    background: `url('https://wallpaperaccess.com/full/863234.jpg') no-repeat center center/cover`,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    paddingTop: '60px', // Adjust this value based on your navbar height
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black overlay with 50% opacity
    zIndex: 1,
  },
  content: {
    position: 'relative',
    zIndex: 2,
  },
  heading: {
    fontSize: '3rem',
    margin: '0',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Adds shadow for better readability
  },
  subheading: {
    fontSize: '1.5rem',
    margin: '1rem 0',
    textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)', // Adds shadow for better readability
  },
};

function Aboutt() {
  return (
    <div style={styles.container}>
      <div style={styles.overlay} />
      <div style={styles.content}>
        <Container>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              py: 4,
            }}
          >
            <Typography variant="h2" component="h1" gutterBottom style={styles.heading}>
              About Us
            </Typography>
            <Typography variant="h5" component="h2" paragraph style={styles.subheading}>
              At Street Animal Rescue, our mission is to rescue and rehabilitate street animals, providing them with the care they need and helping them find loving homes. We are dedicated to improving the lives of animals in our community through rescue operations, medical care, and adoption services.
            </Typography>
            <Typography variant="h6" component="h3" paragraph style={styles.subheading}>
              Our team is composed of passionate volunteers and professionals who work tirelessly to make a difference. We rely on the support of our community and generous donors to continue our mission. There are many ways you can help, including volunteering, donating, or spreading the word about our cause.
            </Typography>
            <img
              src={rescueImage}
              alt="Street Animal Rescue"
              style={{
                width: '100%',
                maxWidth: '600px',
                borderRadius: '8px',
                marginTop: '20px',
              }}
            />
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Aboutt;
