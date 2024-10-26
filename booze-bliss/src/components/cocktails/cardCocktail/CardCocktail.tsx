import { Button, CardContent } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import Image from "next/image";

interface CardCocktailProps {
  name: string;
  image: string;
}

const StyledCard = styled(Card)({
  position: "relative",
  width: 250,
  height: 350,
  backgroundSize: "cover",
  backgroundPosition: "center",
  overflow: "hidden",
  borderRadius: "16px",
  boxShadow: "10px 7px 19px -3px rgba(0,0,0,0.75);",
  transition: "transform 0.3s ease",

  "&:hover": {
    transform: "scale(1.05)",
  },
});

const ContentContainer = styled(CardContent)({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  color: "white",
});

const CardCocktail: React.FC<CardCocktailProps> = ({ name, image }) => {
  return (
    <StyledCard
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${image})`,
      }}
    >
      <IconButton
        aria-label="add to favorites"
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "white",
        }}
      >
        <FavoriteIcon />
      </IconButton>
      <ContentContainer className=" mb-0 !pb-2 !pt-2">
        <Typography variant="h6">{name}</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#15c0bd",
            color: "#fff", 
            "&:hover": {
              backgroundColor: "#18fffc",
            },
          }}
        >
          Ver Detalle
        </Button>
      </ContentContainer>
    </StyledCard>
  );
};

export default CardCocktail;
