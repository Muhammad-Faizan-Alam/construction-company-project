"use client";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, FilledInput, FormControl, IconButton, InputAdornment, InputLabel, Link, styled, TextField, Typography } from '@mui/material'
import React from 'react'

const MainSection = styled(Box)({
    width: '100vw',
    // height: '100vh',
})
const FormSection = styled(Box)({
    width: '30vw',
    height: '65vh',
    marginLeft: '35%',
    marginTop: '10%',
    border: '2px solid #1976D2;', // Light gray border
    borderRadius: '10px', // Optional: gives rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
    padding: '3rem',
});

const Practice = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    return (
        <MainSection>
            <FormSection>
                <TextField sx={{ width: '100%' }}
                    required
                    id="filled-required"
                    label="Enter Your Email"
                    //   defaultValue="Hello World"
                    variant="filled"
                />

                {/* password field */}
                <FormControl sx={{ width: '100%', marginTop: '1rem' }} variant="filled">
                    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                    <FilledInput
                        id="filled-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    onMouseUp={handleMouseUpPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>

                {/* submit button */}
                <Button sx={{ width: '100%', marginTop: '1rem', fontWeight: '600' }} variant="outlined">Login</Button>

                {/* sinUp */}
                <Link href="#" underline="hover" sx={{ width: '100%', fontSize: '1rem', marginTop: '1rem', fontWeight: '600', textAlign: 'center' }}>
                    {'SinUp as new user?'}
                </Link>

                {/* other options */}
                <Typography sx={{ width: '100%', fontSize: '1rem', marginTop: '1rem', fontWeight: '600', textAlign: 'center' }}>Or, continue with:</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                    <Button sx={{ width: '40%', backgroundColor: '#E54336' }} variant="contained">Google</Button>
                    <Button sx={{ width: '40%' }} variant="contained">Facebook</Button>
                </Box>
            </FormSection>
        </MainSection>
    )
}

export default Practice