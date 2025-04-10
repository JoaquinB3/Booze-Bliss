"use client"

import * as React from "react"
import { AppBar, Toolbar, Typography, Button, Box, useScrollTrigger, Slide } from "@mui/material"
import Link from "next/link"

interface Props {
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  if (typeof window === "undefined") {
    return children
  }

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Navbar() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <HideOnScroll>
        <AppBar position="fixed" color="transparent" elevation={0} sx={{ backdropFilter: "blur(8px)" }}>
          <Toolbar>
            <Typography 
              component="div" 
              sx={{ flexGrow: 1, fontFamily: "Playfair Display, serif", fontSize: "23px"}}>
              <Link href="/" passHref>
                <Box component="a" sx={{ color: "#0A2342", textDecoration: "none", fontWeight: "bold" }}>
                  BOOZE BLISS
                </Box>
              </Link>
            </Typography>
            <Button 
              color="primary" 
              component={Link} 
              href="/cocktails">
              Cócteles
            </Button>
            <Button 
              color="primary"
              component={Link} 
              href="/about">
              Sobre Nosotros
            </Button>
            <Button 
              color="primary"
              component={Link} 
              href="/contact">
              Contacto
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </React.Suspense>
  )
}

