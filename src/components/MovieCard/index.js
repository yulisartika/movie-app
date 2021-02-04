import React from "react";
import { Card, CardImg, CardTitle, CardBody, CardSubtitle } from "reactstrap";

export default function MovieCard({ image, title, releaseDate }) {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src={image}
          alt={title}
          className="mt-2 p-3"
        />
        <CardBody>
          <CardTitle tag="p">{title}</CardTitle>
          <CardSubtitle tag="h6">{releaseDate}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}
