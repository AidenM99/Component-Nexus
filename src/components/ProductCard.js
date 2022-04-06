import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";

const ProductCard = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Grid key={product.id} item xs={8} md={6} lg={4} xl={3}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <CardActionArea sx={{ padding: "1rem", height: "200px" }}>
              <CardMedia
                component="img"
                image={product.image}
                sx={{
                  width: "100%",
                  height: "100%",
                  margin: "auto",
                  objectFit: "contain",
                }}
              />
            </CardActionArea>
            <CardContent>
              <Typography variant="h6" fontSize="1rem">
                {product.name}
              </Typography>
              <Typography fontStyle="italic">{product.price}</Typography>
              <Button
                variant="contained"
                fullWidth={true}
                disableElevation={true}
                color="secondary"
              >
                Buy now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default ProductCard;
