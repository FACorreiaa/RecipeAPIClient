import React from "react";
import useResources from "./useResources";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import cake from "../assets/cakeExample.jpg";
import { useMediaQuery } from "@react-hook/media-query";

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  const matches = useMediaQuery("only screen and (max-width: 420px)");

  return (
    <Container>
      {matches && (
        <Row style={{ justifyContent: "space-between" }}>
          {resources.map((record) => (
            <Card style={{ marginBottom: "10px" }} key={record.id}>
              <Card.Header>Desert</Card.Header>
              <Card.Img variant="top" src={cake} />
              <Card.Body>
                <Card.Title>Bolo de Cenoura</Card.Title>
                <Card.Subtitle>Cobertura de chocolate</Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Show more</Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      )}

      <Row style={{ justifyContent: "space-between" }}>
        {resources.map((record) => (
          <Card
            style={{ width: "20rem", marginBottom: "10px" }}
            key={record.id}
          >
            <Card.Header>Desert</Card.Header>
            <Card.Img variant="top" src={cake} />
            <Card.Body>
              <Card.Title>Bolo de Cenoura</Card.Title>
              <Card.Subtitle>Cobertura de chocolate</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Show more</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ResourceList;
