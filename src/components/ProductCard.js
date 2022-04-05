import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
} from "@mui/material";
import processors from "../utils/products/Processors";

const ProductCard = () => {
  return (
    <>
      {processors.map((product) => (
        <Grid key={product.id} item md={6} lg={4} xl={3}>
          <Card>
            <CardActionArea sx={{ padding: "1rem" }}>
              <CardMedia
                component="img"
                image={product.image}
                sx={{ width: "100%", margin: "auto" }}
              />
            </CardActionArea>
            <CardContent>
              <Typography variant="h6">{product.description}</Typography>
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
