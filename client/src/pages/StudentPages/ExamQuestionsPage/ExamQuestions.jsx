import {
  Button,
  Col,
  Row,
  Card,
  Pagination,
  Radio,
  Divider,
  Watermark,
} from "antd";
import React, { useEffect, useState } from "react";
import MBTIQuestion from "./MBTIQuestion.json";
import SubmitButton from "../../../components/Buttons/SubmitButton";

function ExamQuestions() {
  //   const [mbtiQuestion, setmbtiQuestions] = useState([]);

  //   useEffect(() => {
  //     // Assuming you want to set the questions in the component's state
  //     setmbtiQuestions(MBTIQuestion.questions);
  //   }, []);
  const goNext = () => {};
  const goPrevious = () => {};
  const questions = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      <Row gutter={16} className="h-100">
        <Col md={16} className="p-3">
          <Card className="h-100">
            <h3 className="font-weight-bold text-center">Questions</h3>
            <hr />
            <Watermark content="MYNDKARE EXAMS">
              <p className="pt-4 px-4">
                1. {MBTIQuestion.questions[0].question}
              </p>
              <Radio.Group value={null} name="radiogroup" className="p-2 px-5">
                <Radio name="radio1">
                  <Divider plain>A</Divider>
                  {MBTIQuestion.questions[0].options.A.map((option, index) => (
                    <div key={index} value={index + 1} className="px-5">
                      {option}
                    </div>
                  ))}
                </Radio>
                <Radio name="radio2">
                  <Divider plain>B</Divider>
                  {MBTIQuestion.questions[0].options.B.map((option, index) => (
                    <div key={index} value={index + 1} className="px-5">
                      {option}
                    </div>
                  ))}
                </Radio>
              </Radio.Group>
            </Watermark>
            <center className="p-2">
              <Button className="mx-2" onClick={() => goPrevious()}>
                Previous
              </Button>
              <Button className="" onClick={() => goNext()}>
                Next
              </Button>
            </center>
          </Card>
        </Col>
        <Col md={8} className="p-3">
          <Card className="h-100">
            <Row gutter={24} className="h-100">
              <Col md={24}>
                <h3 className="font-weight-bold">ANSWER STATUS</h3>
                <hr />
              </Col>
              {questions.map((question, index) => (
                <Col md={3} key={index} className="p-2">
                  <Button shape="circle">{question}</Button>
                </Col>
              ))}
            </Row>
            <div className="submit_btn">
              <SubmitButton />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ExamQuestions;
