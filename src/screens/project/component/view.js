import React from "react";
import Card from "react-bootstrap/Card";
import style from "./style";

export const CardView = ({ img, title, des }) => {
  return (
    <Card
      bg={"dark"}
      text={"light"}
      style={{ border: "1px solid white", borderRadius: 6 }}
    >
      <Card.Img style={style.card} variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{des}</Card.Text>
      </Card.Body>
    </Card>
  );
};
