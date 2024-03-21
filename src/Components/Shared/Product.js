import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Product = ({ product }) => {
  const { setOrder } = useAuth();
  const handleBuyNow = async () => {
    const orderedProduct = await { ...product };
    setOrder(orderedProduct);
  };

  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ maxWidth: 370, margin: "auto" }}>
        <CardActionArea sx={{ minHeight: 200 }}>
          <CardMedia
            component="img"
            height="300px"
            image={product?.imgs[0]}
            alt="graphic card"
            sx={{}}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product?.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ color: "#1565C0", fontWeight: "600" }}
            >
              ৳{Number(product?.price)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Link
          to={`/product/${product?._id}`}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <Button
            onClick={handleBuyNow}
            variant="contained"
            sx={{ width: 1, borderRadius: 0 }}
          >
            See more
          </Button>
        </Link>
      </Card>
    </Grid>
  );
};

export default Product;
