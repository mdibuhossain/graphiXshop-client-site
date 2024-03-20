import React, { useEffect, useState } from "react";
import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Product from "../Shared/Product";
import Title from "../Shared/Title";
import { Link } from "react-router-dom";

const DisplayProduct = () => {
  const [disProduct, setDisProduct] = useState([]);
  useEffect(() => {
    fetch("/car_data.json")
      .then((res) => res.json())
      .then((data) => setDisProduct(data?.slice(0,3)));
  }, []);

  console.log(disProduct);

  return (
    <Box sx={{ my: 5 }}>
      <Container>
        <Title subTitle="PRODUCT" title="Our Product" />
        <Grid container spacing={2}>
          {disProduct.map((product, index) => (
            <Product key={index} product={product} />
          ))}
        </Grid>
        {/* <Link
          to="/explore"
          style={{ color: "inherit", textDecoration: "none" }}
        > */}
          <Button
            variant="contained"
            sx={{ margin: "25px auto", display: "block" }}
          >
            See more
          </Button>
        {/* </Link> */}
      </Container>
    </Box>
  );
};

export default DisplayProduct;
