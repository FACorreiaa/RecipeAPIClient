import React from "react";
import useResources from "./useResources";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Media from "react-bootstrap/Media";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import DayJS from "react-dayjs";
import Likes from "./likes/Likes";
import CommentsButton from "./comments/Comments";
import CustomNavDesktop from "./navbar/CustomNavDesktop";
import CustomNavMobile from "./navbar/CustomNavMobile";
import { useMediaQuery } from "@react-hook/media-query";

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

  const matches = useMediaQuery("only screen and (max-width: 492px)");
  return (
    <>
      {matches ? (
        <CustomNavMobile />
      ) : (
        <>
          <CustomNavDesktop />
        </>
      )}
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
                <Card.Img variant="top" src={record.image} alt="recipe mage" />

                <Card.Body>
                  <small className="text-muted" style={{ textAlign: "center" }}>
                    <label>Posted on:&nbsp;&nbsp;</label>
                    <DayJS format="MM-DD-YYYY">{record.date}</DayJS>
                    &nbsp;&nbsp;
                  </small>
                  <span style={{ float: "right" }}>
                    <Likes id={record.id} value={value} />
                    &nbsp;&nbsp;
                    <span>
                      {record.likes} {renderLikes(record.likes)}
                    </span>
                  </span>
                  <div>
                    <small style={{ textAlign: "center" }}>{record.type}</small>
                  </div>
                  <Card.Title>{record.title}</Card.Title>
                  <Card.Subtitle>{record.body}</Card.Subtitle>
                  <div>
                    {record.hash.map((h) => (
                      <Badge pill variant="dark">
                        {h}
                      </Badge>
                    ))}
                  </div>
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
                        <strong>Nutrients:</strong>
                        <div>
                          <span>
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
                          </span>
                        </div>
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
                <Card.Footer className="text-muted text-center">
                  Made by: {record.author}
                </Card.Footer>
              </Card>
            </CardDeck>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ResourceList;
