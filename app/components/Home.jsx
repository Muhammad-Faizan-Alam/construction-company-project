"use client";
import { Box, CardMedia, styled, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBgImage, setStateSelector } from "../store/slice/Slice";

// Reset global margin and padding to avoid overflow issues
const GlobalStyle = styled("div")({
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
});

const MainSection = styled(Box)({
  width: "100%",
  overflowX: "hidden", // Prevent horizontal scroll
});

const HeroSection = styled(Box)({
  position: "fixed", // Fixed position so it stays in place
  top: 0,
  left: 0,
  width: "100%",
  height: "100vh", // Full viewport height
  backgroundColor: "black",
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  zIndex: 1, // Ensure it stays behind other sections when they scroll over
});

const HeroTextSection = styled(Box)(({ theme }) => ({
  position: "relative",
  paddingTop: "20vh",
  paddingLeft: "5vw",
  width: "100%",
  textAlign: "center", // Center align text for small screens
  [theme.breakpoints.up("md")]: {
    width: "45vw", // 45vw on medium and larger screens
    textAlign: "left", // Left align text on larger screens
    paddingTop: "30vh",
    paddingLeft: "10vw",
  },
}));

const HeroText = styled(Typography)(({ theme }) => ({
  color: "white",
  fontWeight: "800",
  fontSize: "3rem",
  fontFamily: "Bebas Neue, sans-serif",
  [theme.breakpoints.up("md")]: {
    fontSize: "6rem", // Larger font size on medium and larger screens
  },
}));

const HeroImageSection = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "100vh",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "52vw", // 52vw on medium and larger screens
  },
}));

const HeroImageDiv = styled(Box)(({ bgImage, bgPosition }) => ({
  flex: 1,
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: bgPosition,
  backgroundSize: "300%",
  backgroundRepeat: "no-repeat",
  transition: "background-image 0.3s ease-in-out",
  cursor: "pointer",
}));

const DesSection = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: "gray",
  color: "#1B1B1B",
  padding: "2rem 1rem",
  zIndex: 2, // Ensure it is on top of the HeroSection when scrolling
  position: "relative",
  fontWeight: "800",
  fontSize: "2rem",
  fontFamily: "Bebas Neue, sans-serif",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    padding: "3rem",
    fontSize: "5rem", // Larger font size on medium and larger screens
  },
}));

const Section2 = styled(Box)(({ theme }) => ({
  width: "100%",
  color: "gray",
  padding: "3rem 1rem",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  backgroundImage: "url(/images/img5.webp)",
  position: "relative",
  zIndex: 2,
  filter: "grayscale(100%) brightness(0.7)",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row", // Horizontal layout on medium and larger screens
    padding: "6rem",
    gap: "5rem",
  },
}));

const ImagePart = styled(Box)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "600",
  color: "black",
  fontFamily: "Bebas Neue, sans-serif",
  width: "100%",
  textAlign: "center", // Center align for small screens
  [theme.breakpoints.up("md")]: {
    width: "40%", // 40% on medium and larger screens
    textAlign: "left", // Left align for larger screens
  },
}));

const TextPart = styled(Box)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "600",
  color: "black",
  fontFamily: "Bebas Neue, sans-serif",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "45%", // 45% width on medium and larger screens
  },
}));

const InnerTextPart = styled(Typography)({
  color: "gray",
  borderTop: "1px solid gray",
  paddingTop: "1rem",
});

// Customize CardMedia with MediaPart tag
const MediaPart = styled(CardMedia)(({ theme }) => ({
  height: "40vh",
  filter: "grayscale(100%) brightness(0.7)",
  opacity: 0.9,
  position: "relative", // For pseudo-elements positioning
  "::before": {
    content: '""',
    position: "absolute",
    left: "-2rem", // Position the line slightly outside the left of the image
    top: "2rem", // Start a little below the top
    height: "calc(100%)", // Extend the vertical line almost to the bottom
    width: "2px", // Thickness of the line
    backgroundColor: "gray", // Line color
  },
  "::after": {
    content: '""',
    position: "absolute",
    left: "-2rem", // Align with the vertical line
    bottom: "-2rem", // Start a little below the bottom
    height: "2px", // Thickness of the line
    width: "calc(100% - 1rem)", // Extend almost across the entire width, stopping a bit before the right side
    backgroundColor: "gray", // Line color
  },
}));

const Section3 = styled(Box)(({ theme }) => ({
  width: "100%",
}));

const Home = () => {
  const { bgImage } = useSelector(setStateSelector);
  const dispatch = useDispatch();

  const handleHover = (imageUrl) => {
    dispatch(setBgImage(imageUrl)); // Changes the image across all sections
  };

  return (
    <GlobalStyle>
      <MainSection>
        <HeroSection>
          <HeroTextSection>
            <HeroText variant="h2" sx={{ fontSize: { xs: "3rem", md: "6rem" } }}>
              AM Construction & Renovation
            </HeroText>
          </HeroTextSection>

          <HeroImageSection>
            {/* Left Image Section */}
            <HeroImageDiv
              bgImage={bgImage}
              bgPosition="left"
              onMouseEnter={() => handleHover("/images/img1.avif")}
            />

            {/* Center Image Section */}
            <HeroImageDiv
              bgImage={bgImage}
              bgPosition="center"
              onMouseEnter={() => handleHover("/images/img2.avif")}
            />

            {/* Right Image Section */}
            <HeroImageDiv
              bgImage={bgImage}
              bgPosition="right"
              onMouseEnter={() => handleHover("/images/img3.avif")}
            />
          </HeroImageSection>
        </HeroSection>

        {/* Other sections that will scroll */}
        <Box sx={{ mt: "100vh" }}>
          <DesSection>
            We have been a reliable construction company in the Netherlands for
            years.
          </DesSection>

          {/* All-round cons. comp. */}
          <Section2>
            <ImagePart>
              AM <br />
              CONSTRUCTION COMPANY
              {/* Custom MediaPart component */}
              <MediaPart
                image="/images/img4.jpg"
                title="AM...!"
              />
            </ImagePart>
            <TextPart>
              An all-round construction company
              <InnerTextPart variant="body1">
                As an all-round construction company, we at AM Construction are
                specialized in various types of work such as new construction,
                remodeling, and renovations. With more than 10 years of
                experience as contractors, we guarantee quality and reliability.
                We are particularly known for our bathroom renovations and zinc
                work, but you can also count on us for basement conversions of
                homes and other construction projects. At our construction
                company, your wishes are central, regardless of whether it's a
                large or small project. You can rely on us for all your new
                construction, remodeling, and renovation projects!
              </InnerTextPart>
            </TextPart>
          </Section2>
        </Box>gjjjjjjjjjjjjjjj
      </MainSection>
    </GlobalStyle>
  );
};

export default Home;