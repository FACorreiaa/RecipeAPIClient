import React from "react";
import useResources from "./useResources";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import * as Icon from "react-bootstrap-icons";

import cake from "../assets/cakeExample.jpg";
import { useMediaQuery } from "@react-hook/media-query";

const ResourceList = () => {
  const resources = useResources();
  const matches = useMediaQuery("only screen and (max-width: 420px)");
  const units = {
    cal: "kcal;",
    grams: "g;",
    mgs: "mg;",
  };
  console.log(resources);
  return (
    <Container>
      {matches && (
        <Row style={{ justifyContent: "space-between" }}>
          {resources.map((record) => (
            <Card style={{ marginBottom: "10px" }} key={record.id}>
              <Card.Header>Desert</Card.Header>
              <Card.Img variant="top" src={cake} />
              <Card.Body>
                <Card.Title>{record.title}</Card.Title>
                <Card.Subtitle>Made by: {record.author}</Card.Subtitle>
                <Card.Text>{record.body}</Card.Text>
                <Button variant="primary">Show Macros</Button>
                <Card.Body style={{ fontSize: "small" }}>
                  <strong>Calories:</strong>
                  <em>
                    {record.calories}
                    {units.cal}&nbsp;&nbsp;
                  </em>
                  <p>
                    <strong>Protein: </strong>
                    <em>
                      {record.protein}
                      {units.grams}&nbsp;&nbsp;
                    </em>
                    <strong>Carbs: </strong>
                    <em>
                      {" "}
                      {record.carbs}
                      {units.grams}&nbsp;&nbsp;
                    </em>
                    <strong>Fats: </strong>
                    <em>
                      {record.fat}
                      {units.grams}&nbsp;&nbsp;
                    </em>
                  </p>
                </Card.Body>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <Button variant="outline-secondary">Button</Button>
                  </InputGroup.Prepend>
                  <FormControl aria-describedby="basic-addon1" />
                </InputGroup>
              </Card.Body>
            </Card>
          ))}
        </Row>
      )}

      <Row style={{ justifyContent: "space-between" }}>
        {resources.map((record) => (
          <Card
            style={{
              width: "20rem",
              marginBottom: "10px",
              backgroundColor: "#f5f4f2",
            }}
            key={record.id}
          >
            <Card.Header>Desert</Card.Header>
            <Card.Img variant="top" src={record.image} />
            <Card.Body>
              <Card.Title>{record.title}</Card.Title>
              <Card.Subtitle>Made by: {record.author}</Card.Subtitle>
              <Card.Text>{record.body}</Card.Text>
            </Card.Body>
            <Card.Body>
              <label>Tap if you enjoyed this recipe please!</label>
              <p>
                <Icon.HeartFill color="red" size={18} />
                &nbsp;&nbsp;
                <span>0 Likes</span>
              </p>
            </Card.Body>
            <Card.Body style={{ fontSize: "small" }}>
              <strong>Calories:</strong>
              <em>
                {record.calories}
                {units.cal}&nbsp;&nbsp;
              </em>
              <p>
                <strong>Protein: </strong>
                <em>
                  {record.protein}
                  {units.grams}&nbsp;&nbsp;
                </em>
                <strong>Carbs: </strong>
                <em>
                  {" "}
                  {record.carbs}
                  {units.grams}&nbsp;&nbsp;
                </em>
                <strong>Fats: </strong>
                <em>
                  {record.fat}
                  {units.grams}&nbsp;&nbsp;
                </em>
              </p>
            </Card.Body>
            <Card.Body>
              <span>{record.comments}</span>
            </Card.Body>
            <Card.Body>
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control
                      placeholder="Add your comment"
                      as="textarea"
                      rows="2"
                    />
                  </Col>
                  <Col>
                    <Button variant="dark">Submit comment</Button>
                  </Col>
                </Form.Row>
              </Form>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default ResourceList;
