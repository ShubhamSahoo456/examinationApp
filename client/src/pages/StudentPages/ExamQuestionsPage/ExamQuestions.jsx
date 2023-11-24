import {
  Button,
  Col,
  Row,
  Card,
  Radio,
  Divider,
  Watermark,
  Statistic,
} from "antd";
import React, { useEffect, useState } from "react";
import SubmitButton from "../../../components/Buttons/SubmitButton";
import axios from "../../../axiosConfig";

function ExamQuestions() {
  const { Countdown } = Statistic;
  const goNext = () => {};
  const goPrevious = () => {};
  const countdownValue = Date.now() + 210000;
  const onChange = (val) => {
    if (typeof val === "number" && 4.95 * 1000 < val && val < 5 * 1000) {
      console.log("changed!");
    }
  };
  const [mbtiQuestions, setMbtiQuestions] = useState([]);

  const fetchMBtiQuestions = async () => {
    const { data } = await axios.get("/question/mbti");
    console.log(data);
    setMbtiQuestions(data);
  };

  useEffect(() => {
    fetchMBtiQuestions();
  }, []);

  return (
    <>
      <Row gutter={16} className="h-100">
        <Col md={16} className="p-3">
          <Card className="h-100">
            <h3 className="font-weight-bold text-center">Questions</h3>
            <hr />
            <Watermark content="MYNDKARE EXAMS">
              {mbtiQuestions.map((question, index) => (
                <>
                  <p className="pt-4 px-4">
                    {index + 1}. {question.questionText}
                  </p>
                  <Radio.Group
                    value={null}
                    name="radiogroup"
                    className="p-2 px-5"
                  >
                    {question.options.map((option, index) => (
                      <Radio name="radio1" key={option._id} className="my-3">
                        <div value={index + 1} className="px-5">
                          <Divider plain>{index + 1}</Divider>
                          {option.text.map((mbtiText) => (
                            <p>{mbtiText}</p>
                          ))}
                        </div>
                      </Radio>
                    ))}
                  </Radio.Group>
                  <hr />
                </>
              ))}
            </Watermark>
            {/* <center className="p-2">
              <Button className="mx-2" onClick={() => goPrevious()}>
                Previous
              </Button>
              <Button className="" onClick={() => goNext()}>
                Next
              </Button>
            </center> */}
          </Card>
        </Col>
        <Col md={8} className="p-3">
          <Card className="h-100">
            <Row gutter={24} className="h-100">
              <Col md={24}>
                <h3 className="font-weight-bold">ANSWER STATUS</h3>
                <hr />
              </Col>
              {mbtiQuestions.map((question, index) => (
                <Col md={3} key={question._id} className="p-2">
                  <Button shape="circle">{index + 1}</Button>
                </Col>
              ))}
            </Row>
            <Countdown
              title="Countdown"
              value={countdownValue}
              onChange={onChange}
            />
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
