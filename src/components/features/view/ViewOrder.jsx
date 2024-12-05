import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slice/OrderSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ViewFood.css";

const ViewOrder = ({ cart = [], setCart }) => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.products);
    const navigate = useNavigate();
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const query = queryParams.get("search") || "";
        setSearchQuery(query);
    }, [location.search]);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleAddToCart = (product) => {
        const existingItem = cart.find((item) => item.id === product.id);
        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
        }
    };

    const filteredProducts = products.filter((product) =>
        product.orderItem.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalItems = Array.isArray(cart)
        ? cart.reduce((acc, item) => acc + item.quantity, 0)
        : 0;

    return (
        <div className="view-order-container">
            {/* Navbar with Cart Icon */}
            <div className="navbar">
                <Typography variant="h5">Foodies</Typography>
                <IconButton
                    size="large"
                    color="inherit"
                    onClick={() => navigate("/cart")}
                >
                    <Badge badgeContent={totalItems} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </div>

            <div className="view-order-header">
                <Typography variant="h3" gutterBottom className="header-title">
                    Discover the Best Food Around You
                </Typography>
                <Typography variant="body1" className="header-subtitle">
                    Order delicious meals from top restaurants with just one click!
                </Typography>
                <input
                    type="text"
                    placeholder="Search for food, dishes, or restaurants"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
            </div>

            <Grid container spacing={3} justifyContent="center">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <Card className="product-card">
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.img}
                                    alt={product.orderItem}
                                    className="product-image"
                                />
                                <CardContent>
                                    <Typography variant="h6" className="product-title">
                                        {product.orderItem}
                                    </Typography>
                                    <Typography variant="body2" className="product-details">
                                        Price: ₹{product.price}
                                    </Typography>
                                </CardContent>
                                <CardActions className="card-actions">
                                    <Button
                                        size="small"
                                        variant="outlined"
                                        className="view-details-button"
                                        onClick={() => navigate(`/view-details/${product.id}`)}
                                    >
                                        View Details
                                    </Button>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        className="add-to-cart-button"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="h6" className="no-products">
                        No products found
                    </Typography>
                )}
            </Grid>
        </div>
    );
};

export default ViewOrder;
