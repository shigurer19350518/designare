import React from 'react';
import Box from '@mui/material/Box'
import type { NextPage } from 'next'
import { DesignareCanvas } from '@designare/core';

const Home: NextPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "#c1c1c1",
        width: "100%",
        height: "100%"
      }}
    >
      <DesignareCanvas>
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", pr: "300px", height: "100%" }}>
          <Box
            sx={{
              width: "480px",
              height: "720px",
              bgcolor: "#ffffff",
            }}
          >
          </Box>
        </Box>
      </DesignareCanvas>
      <Box
        sx={{
          height: "100%",
          width: "300px",
          position: "fixed",
          right: 0,
          top: 0,
          bgcolor: "#ffffff",
        }}
      >

      </Box>
    </Box>
  )
}

export default Home
