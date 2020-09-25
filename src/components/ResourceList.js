import React from "react";
import useResources from "./useResources";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Media from "react-bootstrap/Media";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import DayJS from "react-dayjs";
import Likes from "./likes/Likes";
import CommentsButton from "./comments/Comments";
import { ImTwitter } from "react-icons/im";
import { RiFacebookCircleFill } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";

//import { useMediaQuery } from "@react-hook/media-query";
const ResourceList = () => {
  const resources = useResources();
  let value = 0;
  const units = {
    cal: "kcal;",
    grams: "g;",
    mgs: "mg;",
  };

  const renderLikes = function (param) {
    if (param === 1) return "Like";
    else return "Likes";
  };

  const initialState = {
    body: "",
    isSubmitting: false,
    errorMessage: null,
  };
  const [body, setBody] = React.useState(initialState);
  const handleInputChange = (event) => {
    const item = event.target.value;
    setBody({
      ...body,
      [event.target.name]: item,
    });
  };
  return (
    <Container>
      <Row style={{ justifyContent: "space-between" }}>
        {resources.map((record) => (
          <CardDeck>
            <Card
              border="light"
              style={{
                width: "22em",
                marginBottom: "10px",
                backgroundColor: "#f5f4f2",
              }}
              key={record.id}
            >
              <Card.Header as="h5">{record.type}</Card.Header>
              <Card.Img variant="top" src={record.image} alt="recipe mage" />

              <Card.Body>
                <Card.Title>{record.title}</Card.Title>
                <Card.Subtitle
                  style={{
                    marginBottom: "1em",
                  }}
                >
                  {record.body}
                </Card.Subtitle>
                <Row>
                  <Col>
                    <Card.Text>
                      <strong>Made by:</strong> {record.author}
                    </Card.Text>
                  </Col>
                </Row>
                <Row
                  style={{
                    marginTop: "1em",
                    marginBottom: "1em",
                    fontSize: "normal",
                  }}
                >
                  <Col>
                    {" "}
                    <strong>Ingredients: </strong>
                    {record.ingredients.length > 0
                      ? record.ingredients.map((ingredient) => (
                          <span>{ingredient};&nbsp;</span>
                        ))
                      : "No ingredients added yet"}
                  </Col>
                </Row>{" "}
                <Row
                  style={{
                    marginTop: "1em",
                    marginBottom: "1em",
                    fontSize: "small",
                  }}
                >
                  <Col>
                    <div>
                      <strong style={{ fontSize: "15px" }}>
                        Tap if you enjoyed this recipe please!
                      </strong>
                    </div>
                  </Col>
                  <Col>
                    <Likes id={record.id} value={value} />
                    &nbsp;&nbsp;
                    <span>
                      {record.likes} {renderLikes(record.likes)}
                    </span>
                  </Col>
                </Row>
                <Row
                  style={{
                    marginTop: "1em",
                    marginBottom: "1em",
                    fontSize: "small",
                  }}
                >
                  <Col>
                    <div>
                      <strong>Nutrients:</strong>
                      <dl>
                        <strong>Calories: </strong>
                        {record.calories}
                        {units.cal}
                        <strong>Protein: </strong>
                        {record.protein.toFixed(3)}
                        {units.grams}
                        <strong>Carbs: </strong>
                        {record.carbs.toFixed(3)}
                        {units.grams}
                        <strong>Fats: </strong>
                        {record.fat.toFixed(3)}
                        {units.grams}
                        <strong>Fiber: </strong>
                        {record.fiber.toFixed(3)}
                        {units.grams}
                        <strong>Sugar: </strong>
                        {record.sugar.toFixed(3)}
                        {units.grams}
                        <strong>Sodium: </strong>
                        {record.sodium.toFixed(3)}
                        {units.mgs}
                        <strong>Water: </strong>
                        {record.water.toFixed(3)}
                        {units.mls}
                      </dl>
                    </div>
                  </Col>
                </Row>
              </Card.Body>

              <Card.Body
                scrollable="true"
                style={{
                  maxHeight: "calc(100vh - 210px)",
                  overflowY: "auto",
                }}
              >
                {record.comments.map((comment) => (
                  <div style={{ marginTop: "1em", marginBottom: "1em" }}>
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
              <Card.Body style={{ paddingBottom: "5px" }}>
                <Form>
                  <Form.Row>
                    <Col>
                      <Form.Control
                        placeholder="Add your comment"
                        as="textarea"
                        rows="2"
                        onChange={handleInputChange}
                        name="body"
                        id="body"
                        style={{ height: "77px" }}
                      />
                    </Col>
                    <Col>
                      <CommentsButton id={record.id} body={body} />
                    </Col>
                  </Form.Row>
                  {body.errorMessage && (
                    <span className="form-error">{body.errorMessage}</span>
                  )}
                </Form>
              </Card.Body>
              <Card.Footer>
                <div style={{ textAlign: "center" }}>
                  <small className="text-muted">
                    <label>Posted on:&nbsp;&nbsp;</label>
                    <DayJS format="MM-DD-YYYY">{record.date}</DayJS>&nbsp;&nbsp;
                  </small>
                  <a
                    target="_blank"
                    href="https://twitter.com/FACorreiaa"
                    rel=" noopener noreferrer"
                  >
                    <ImTwitter color="rgb(0, 123, 255)" size="21px" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/Nandooo316"
                    rel=" noopener noreferrer"
                  >
                    <RiFacebookCircleFill color="rgb(66,103,178)" size="21px" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/fernando-correia-ab018079/"
                    rel=" noopener noreferrer"
                  >
                    {" "}
                    <SiLinkedin color="rbg(40,103,178)" size="21px" />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/fernandotcorreia/"
                    rel=" noopener noreferrer"
                  >
                    {" "}
                    <FiInstagram colot="rbg(253,29,29)" size="21px" />
                  </a>
                </div>
              </Card.Footer>
            </Card>
          </CardDeck>
        ))}
      </Row>
    </Container>
  );
};

export default ResourceList;
