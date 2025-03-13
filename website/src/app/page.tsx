'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ProTip from '@/components/ProTip';
import Copyright from '@/components/Copyright';
import Button from '@mui/material/Button';
import Hero from '@/components/Hero'
import LogoCollection from '@/components/LogoCollection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Highlights from '@/components/Highlights';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import type {} from '@mui/material/themeCssVarsAugmentation';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Hero />
        <div>
          <LogoCollection />
          <Features />
        
          <Testimonials />
        
          <Highlights />
          
          <Pricing />
        
          <FAQ />
      
          <Footer />
          </div>
        </Box>
    </Container>
  );
}
