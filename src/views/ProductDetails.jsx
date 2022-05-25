import { useEffect, useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import "./css/ProductDetails.css";

const ProductDetails = () => {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState(null);
  function fetchProduct() {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((product) => setProduct(product));
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  const mystyle = {
  overflowY: "scroll",
};
  return product ? (
    
    <div class="container mt-3" style={mystyle}>
      <Card className="w-50 m-auto mt-4">
        <Card.Img
          className="m-auto fixed-size mt-2"
          variant="top"
          src={product.image}
        />
        <Card.Body>
          <Card.Title className="h6 text-center">{product.title}</Card.Title>
          <ReactStars
            classNames="m-auto"
            size={50}
            value={product.rating.rate}
            edit={false}
          />
          <Card.Text
            title={product.description}
            className="text-secondary text-center"
            class="text-justify"
          >
            {product.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush text-center">
          <ListGroupItem variant="success">{product.price} $</ListGroupItem>
          <ListGroupItem variant="primary">{product.category}</ListGroupItem>
        </ListGroup>
        <div className="text-center my-2">
          <Button variant="success">Buy Now</Button>
          <span class="m-1">
            <Button variant="danger">Whish List</Button>
          </span>
        </div>
      </Card>
    </div>
  ) : (
    <div class="center">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  );
};

export default ProductDetails;
