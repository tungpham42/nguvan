import React from "react";
import { Container, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import lessons from "../data/lessons";

const LessonDetail = () => {
  const { id } = useParams();
  const lesson = lessons.find((l) => l.id === parseInt(id));

  if (!lesson) return <Container>Bài học không tồn tại</Container>;

  return (
    <Container className="mt-4">
      <Card>
        <Card.Body>
          <Card.Title>{lesson.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Lớp {lesson.grade}
          </Card.Subtitle>
          <Card.Text>{lesson.content}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LessonDetail;
