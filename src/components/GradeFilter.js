import React from "react";
import { Form } from "react-bootstrap";

const GradeFilter = ({ selectedGrade, onGradeChange }) => {
  const grades = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Form.Group className="mb-3">
      <Form.Label>Lọc theo lớp</Form.Label>
      <Form.Select
        value={selectedGrade}
        onChange={(e) => onGradeChange(e.target.value)}
      >
        <option value="">Tất cả</option>
        {grades.map((grade) => (
          <option key={grade} value={grade}>
            Lớp {grade}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default GradeFilter;
