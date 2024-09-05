"use client";
import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBgImage, setStateSelector } from '../store/slice/Slice';

const MainSection = styled(Box)({
  width: '100vw',
  overflow: 'hidden', // Prevent overflow
});

const HeroSection = styled(Box)({
  width: '100vw',
  minHeight: '100vh',
  backgroundColor: 'black',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
});

const HeroTextSection = styled(Box)(({ theme }) => ({
  paddingTop: '30vh',
  paddingLeft: '10vw',
  overflow: 'hidden',
  width: '100vw', // Full width on small screens
  [theme.breakpoints.up('md')]: {
    width: '45vw', // 45vw on medium and larger screens
  },
}));

const HeroText = styled(Typography)({
  color: 'white',
  fontWeight: '800',
  fontSize: '6rem',
  fontFamily: 'Bebas Neue, sans-serif',
});

const HeroImageSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  width: '100vw', // Full width on small screens
  overflow: 'hidden',
  [theme.breakpoints.up('md')]: {
    width: '53vw', // 53vw on medium and larger screens
  },
}));

const HeroImageDiv = styled(Box)(({ bgImage, bgPosition }) => ({
  flex: 1,
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: bgPosition,
  backgroundSize: '300%', // Ensures that the image covers all 3 divs as one large image
  backgroundRepeat: 'no-repeat',
  transition: 'background-image 0.3s ease-in-out',
  cursor: 'pointer',
}));


//* main component
const Home = () => {
//   const [bgimage, setBgimage] = useState('/images/img1.avif');

  const { bgImage } = useSelector(setStateSelector);
  const dispatch = useDispatch();

  const handleHover = (imageUrl) => {
    dispatch(setBgImage(imageUrl)); // Changes the image across all sections
  };

  return (
    <MainSection>
      <HeroSection>
        <HeroTextSection>
          <HeroText variant="h2" sx={{ fontSize: { xs: '3rem', md: '6rem' } }}>
            AM Construction & Renovation
          </HeroText>
        </HeroTextSection>

        <HeroImageSection>
          {/* Left Image Section */}
          <HeroImageDiv
            bgImage={bgImage}
            bgPosition="left"
            onMouseEnter={() => handleHover('/images/img1.avif')} // Image 1 on hover
          />

          {/* Center Image Section */}
          <HeroImageDiv
            bgImage={bgImage}
            bgPosition="center"
            onMouseEnter={() => handleHover('/images/img2.avif')} // Image 2 on hover
          />

          {/* Right Image Section */}
          <HeroImageDiv
            bgImage={bgImage}
            bgPosition="right"
            onMouseEnter={() => handleHover('/images/img3.avif')} // Image 3 on hover
          />
        </HeroImageSection>
      </HeroSection>
    </MainSection>
  );
};

export default Home;