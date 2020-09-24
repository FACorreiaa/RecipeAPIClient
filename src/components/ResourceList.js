import React, { useState } from "react";
import useResources from "./useResources";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Media from "react-bootstrap/Media";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { BsHeart } from "react-icons/bs";
import DayJS from "react-dayjs";
import Likes from "./Likes";
import cake from "../assets/cakeExample.jpg";
import { useMediaQuery } from "@react-hook/media-query";
//import postTodoEndpoint from "./Likes_BETA";
const ResourceList = () => {
  const resources = useResources();
  //const [like, newLike] = postTodoEndpoint();
  const matches = useMediaQuery("only screen and (max-width: 420px)");
  const units = {
    cal: "kcal;",
    grams: "g;",
    mgs: "mg;",
  };

  const renderLikes = function (param) {
    if (param == 1) return "Like";
    else return "Likes";
  };

  console.log(resources);
  return (
    <Container>
      <Row style={{ justifyContent: "space-between" }}>
        {resources.map((record) => (
          <CardDeck>
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
                  <Likes id={record._id} />
                  &nbsp;&nbsp;
                  <span>
                    {record.likes} {renderLikes(record.likes)}
                  </span>
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
                  <strong>Fiber: </strong>
                  <em>
                    {record.fiber}
                    {units.grams}&nbsp;&nbsp;
                  </em>
                  <strong>Sugar: </strong>
                  <em>
                    {record.sugar}
                    {units.grams}&nbsp;&nbsp;
                  </em>
                  <strong>Sodium: </strong>
                  <em>
                    {record.water}
                    {units.grams}&nbsp;&nbsp;
                  </em>
                  <strong>Water: </strong>
                  <em>
                    {record.water}
                    {units.grams}&nbsp;&nbsp;
                  </em>
                </p>
              </Card.Body>
              <Card.Body
                scrollable="true"
                style={{
                  maxHeight: "calc(100vh - 210px)",
                  overflowY: "auto",
                }}
              >
                {record.comments.map((comment) => (
                  <div>
                    <ul className="list-unstyled">
                      <Media as="li">
                        <Media.Body>
                          <span style={{ fontSize: "10px" }}>
                            <DayJS asString={true} element="strong">
                              {comment.date}
                            </DayJS>
                          </span>
                          <p>{comment.body}</p>
                        </Media.Body>
                      </Media>
                    </ul>
                  </div>
                ))}
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
              <Card.Footer>
                <small className="text-muted">
                  <DayJS format="MM-DD-YYYY">{record.date}</DayJS>
                </small>
              </Card.Footer>
            </Card>
          </CardDeck>
        ))}
      </Row>
    </Container>
  );
};

export default ResourceList;
