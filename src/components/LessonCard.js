import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LessonCard = ({ lesson }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{lesson.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Lớp {lesson.grade}
        </Card.Subtitle>
        <Card.Text>{lesson.summary}</Card.Text>
        <Button as={Link} to={`/bai-hoc/${lesson.id}`} variant="primary">
          Xem chi tiết
        </Button>
      </Card.Body>
    </Card>
  );
};

export default LessonCard;
