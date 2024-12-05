import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Typography, Card, CardContent, CardMedia } from "@mui/material";
import "./ViewDetails.css";

const ViewDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { products } = useSelector((state) => state.products);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const productDetails = products.find((prod) => prod.id === id);
        setProduct(productDetails);
    }, [id, products]);

    if (!product) {
        return <Typography variant="h6" align="center">Product not found</Typography>;
    }

    return (
        <div className="details-container">
            <Button
                onClick={() => navigate("/orders")}
                variant="contained"
                className="back-button"
            >
                Back to Orders
            </Button>

            <Card className="details-card">
                <CardMedia
                    component="img"
                    height="300"
                    image={product.img}
                    alt={product.orderItem}
                    className="details-image"
                />
                <CardContent>
                    <Typography variant="h4" component="h1" className="details-title">
                        {product.orderItem}
                    </Typography>

                    <Typography variant="body1" className="details-order-number">
                        <strong>Order Number:</strong> {product.orderNumber}
                    </Typography>

                    <Typography variant="body2" className="details-description">
                        <strong>Detailed Description:</strong> {product.date}, {product.status}
                    </Typography>

                    <Typography variant="body1" className="details-order-number">
                        <strong>Total Price :</strong> {product.price}
                    </Typography>

                    <Typography variant="body2" className="details-notes">
                        <strong>Additional Notes:</strong> {product.rate}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default ViewDetails;
