import React, { useEffect, useState } from "react";
import { Container, Grid, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router-dom";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import WindowIcon from "@mui/icons-material/Window";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import VerifiedIcon from "@mui/icons-material/Verified";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [currentPhoto, setCurrentPhoto] = useState(product?.imgs?.[0]);

  useEffect(() => {
    fetch("/car_data.json")
      .then((res) => res.json())
      .then((data) => {
        const tmp = data.find((item) => item._id === id);
        setCurrentPhoto(tmp?.imgs?.[0]);
        setProduct(tmp);
      });
  }, [id]);

  return (
    <Box sx={{ my: 5 }}>
      <Container>
        <Box>
          <Typography gutterBottom variant="h7">
            {product?.condition} {product?.model}
          </Typography>
          <Typography gutterBottom variant="h3">
            {product?.name}
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item>
            <Box>
              <Box>
                <img
                  style={{ height: "400px", width: "auto" }}
                  src={currentPhoto}
                  alt="product photo"
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                {product?.imgs?.map((photo, index) => (
                  <Box key={index} onClick={() => setCurrentPhoto(photo)}>
                    <img style={{ height: "100px" }} src={photo} alt="photo" />
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography variant="h3">
                  <strong>৳{product?.price}</strong>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <VerifiedIcon />
                <Typography>
                  Brand: <strong>{product?.brand?.toUpperCase()}</strong>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LocalGasStationIcon />
                <Typography>
                  Fuel type: <strong>{product?.fuelType?.toUpperCase()}</strong>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AirlineSeatReclineNormalIcon />
                <Typography>
                  Seats: <strong>{product?.seats}</strong>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <VpnKeyIcon />
                <Typography>
                  Registration: <strong>{product?.registration}</strong>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <WindowIcon />
                <Typography>
                  Interior: <strong>{product?.interior?.toUpperCase()}</strong>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <ColorLensIcon />
                <Typography>
                  Color: <strong>{product?.color?.toUpperCase()}</strong>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <GroupWorkIcon />
                <Typography>
                  Rim size: <strong>{product?.rimSize}</strong>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <ViewInArIcon />
                <Typography>
                  CC: <strong>{product?.cc}</strong>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SingleProduct;
