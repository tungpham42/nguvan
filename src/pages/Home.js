import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import GradeFilter from "../components/GradeFilter";
import LessonCard from "../components/LessonCard";
import lessons from "../data/lessons";

const Home = () => {
  const [selectedGrade, setSelectedGrade] = useState("");

  const filteredLessons = selectedGrade
    ? lessons.filter((lesson) => lesson.grade === parseInt(selectedGrade))
    : lessons;

  return (
    <Container className="mt-4">
      <Row>
        <Col md={3}>
          <GradeFilter
            selectedGrade={selectedGrade}
            onGradeChange={setSelectedGrade}
          />
        </Col>
        <Col md={9}>
          <Row>
            {filteredLessons.map((lesson) => (
              <Col md={4} key={lesson.id}>
                <LessonCard lesson={lesson} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
