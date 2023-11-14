import { Col, Image, Row, Watermark } from "antd";
import ReportHeader from "../../components/Header/ReportHeader";
import Chart from "../../components/Chart";

function GenerateReport() {
  const DBDASCORELABEL = ["VA", "SA", "NA", "MA", "RA", "CL", "CA"];
  const DBDADATA = [5, 5, 7, 5, 10, 4, 5];
  const INTERESTSCORELABEL = [
    "ADMINISTRATIVE",
    "ENTERPRISING",
    "DEFENSE",
    "SPORTS",
    "CREATIVE",
    "PERFORMING",
    "MEDICAL",
    "TECHNICAL",
    "EXPRESSIVE",
    "COMPUTATIONAL",
    "HUMANITARIAN",
    "EDUCATION",
    "NATURE",
    "CLERICAL",
  ];
  const INTERESTSCOREDATA = [1, 3, 10, 10, 6, 1, 1, 7, 3, 10, 1, 1, 1, 3];
  const CERTIFICATION_NO = "UKAAB/QOBQX1269L";
  const STUDENTNAME = "Shirjeel Sharma";
  const TESTINGDATE = new Date();
  const CLASS = "X";
  const GENDER = "Male";

  return (
    <div className="container">
      <ReportHeader certificationNo={CERTIFICATION_NO} />
      <div className="p-4">
        <center>
          <h5>
            <u>
              <b>CAREER TESTING AND GUIDANCE REPORT</b>
            </u>
          </h5>

          <h6>
            <u>
              <b>STUDENT INFORMATION</b>
            </u>
          </h6>
        </center>
        <center>
          <Row>
            <Col md={22}>
              <Row>
                <Col md={12}>
                  <p>
                    <b>Student Name:</b> {STUDENTNAME}
                  </p>
                </Col>
                <Col md={12}>
                  <p>
                    <b>Gender:</b> {GENDER}
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <p>
                    <b>Date of Testing:</b> 27th Oct 2023
                  </p>
                </Col>
                <Col md={12}>
                  <p>
                    <b>Class:</b> {CLASS}
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </center>

        <hr />
        <div className="testInfo">
          <center>
            <h5>
              <b>
                <u>MBTI (Personality Test)</u>
              </b>
            </h5>
          </center>
          <h5 className="py-2">
            <b>Personality Type:</b>
          </h5>
          <h5 className="py-2">
            <b>ESFJ (Extraverted, Sensing, Feeling, Judging)</b>
          </h5>
          <ul>
            <li className="py-2">
              <h6>
                <b>Your Personality Traits:</b>
              </h6>
            </li>
            <ul>
              <li className="py-2">Organized</li>
              <li className="py-2">Loyal</li>
              <li className="py-2">Dependable</li>
              <li className="py-2">
                Enjoy creating order, structure and schedules
              </li>
              <li className="py-2">Enjoy interacting with people</li>
              <li className="py-2">Warm-hearted and sympathetic</li>
              <li className="py-2">Tend to put others needs above your own</li>
              <li className="py-2">Very good at giving practical care</li>
              <li className="py-2">Very cooperative, good team members</li>
              <li className="py-2">Practical and down-to earth</li>
              <li className="py-2">Value peaceful living and security</li>
              <li className="py-2">
                Enjoy variety, but work well with routine tasks
              </li>
              <li className="py-2">Will seek approval from others</li>
              <li className="py-2">
                Receive satisfaction from giving to others
              </li>
              <li className="py-2">Live in the present</li>
            </ul>
          </ul>

          <p className="py-3">
            You will do well at tasks which involve creating or maintaining
            order to structure, and will be happiest when you are serving others
            You will be at your best by organizing people in getting a job done.
            You know it's important to give as well as receive and will like to
            donate your services as a volunteer.
          </p>
          <hr />
        </div>
      </div>
      {/* 2nd Page */}
      <div>
        <ReportHeader certificationNo={CERTIFICATION_NO} />
        <center>
          <h5>
            <b>
              <u>DBDA (Aptitude Test)</u>
            </b>
          </h5>
        </center>
        <div className="p-4">
          <table className="table table-bordered">
            <thead className="p-2">
              <tr>
                <th colspan="2" className="text-center">
                  ITEMS
                </th>
                <th className="text-center">SCORE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2" className="p-2">
                  CLOSURE ABILITY (CA)
                  <br /> is primarily a perceptual ability. It refers to the
                  ability to see quickly a whole stimulus when parts of it are
                  missing.
                </td>
                <td className="p-2 text-center">5</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2">
                  CLERICAL ABILITY (CA)
                  <br /> is concerned with making rapid evaluations with speed
                  and accuracy, of features of visual stimuli.
                </td>
                <td className="p-2 text-center">5</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2">
                  MECHANICAL ABILITY (MA)
                  <br />
                  is the ability to apply reasoning in the practical environment
                  using basic concepts in mechanics. This ability helps an
                  individual to solve problems <br />
                  related to machines and engage in reasoning about the
                  situation rather than simply applying the formulae.
                </td>
                <td className="p-2 text-center">5</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2">
                  NUMERICAL ABILITY (NA)
                  <br />
                  is the ability to perform mathematical operations quickly and
                  correctly. Numerical aptitude includes numerical relationships
                  and problem-solving <br />
                  related to numbers.
                </td>
                <td className="p-2 text-center">7</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2">
                  REASONING ABILITY (RA)
                  <br />
                  is the ability to understand patterns and apply the process of
                  induction, or reason from some specific information to a
                  general principle.
                </td>
                <td className="p-2 text-center">10</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2">
                  SPATIAL ABILITY (SA)
                  <br />
                  is the ability to imagine an object in space and decide how
                  will it look like when rotated in a given direction.
                </td>
                <td className="p-2 text-center">5</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2">
                  VERBAL ABILITY (VA)
                  <br />
                  is the ability to draw meaning from written words and use them
                  effectively. Verbal aptitude measure shows how well an
                  individual understands
                  <br />
                  English words and their synonyms, spells words correctly, and
                  identifies and understands the correct meaning of the given
                  proverbs/idioms.
                </td>
                <td className="p-2 text-center">5</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
      </div>
      {/* 3rd Page */}
      <div>
        <ReportHeader certificationNo={CERTIFICATION_NO} />
        <center>
          <h5>
            <b>
              <u>APTITUDE PROFILE</u>
            </b>
          </h5>
        </center>
        <div className="p-4">
          <div>
            <center>
              <Row>
                <Col md={18}></Col>
                <Chart
                  chartLabel={"DBDA SCORES"}
                  chartlabelArray={DBDASCORELABEL}
                  chartData={DBDADATA}
                />
              </Row>
            </center>
            <center>ABILITIES</center>
          </div>
          <ul>
            <li className="listStyleNone">
              <b>
                <u>Areas of Improvement:</u>
              </b>
              <ul>
                <li className="py-2">
                  Needs to better the perceptual ability for tasks involving
                  rapid evaluation of visual features.
                </li>
              </ul>
            </li>
            <li className="listStyleNone">
              <b>
                <u>Areas of Strength:</u>
              </b>
              <ul>
                <li className="py-2">
                  Has average ability to understand and apply rapid numerical
                  solutions to computation tasks.
                </li>
                <li className="py-2">
                  Has an average ability to form a perceptual cluster from a
                  number of vague or jumbled data present in the surroundings.
                </li>
                <li className="py-2">
                  Has an average ability towards understanding of words and
                  their use in day to day application.
                </li>
                <li className="py-2">
                  Has average ability to perceive patterns clearly, following
                  the orientation of figures when their position is altered or
                  even in a disoriented visual pattern.
                </li>
                <li className="py-2">
                  Has average understanding of basic mechanical principles
                  underlying simple mechanics, tools, electrical, and automotive
                  operations.
                </li>
              </ul>
            </li>
            <li className="listStyleNone">
              <b>
                <u>Areas of Proficiency:</u>
              </b>
              <ul>
                <li className="py-2">
                  Has fine ability to apply the process of induction or logical
                  reasoning in order to comprehend relationships.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      {/* 4th Page */}

      <div>
        <ReportHeader certificationNo={CERTIFICATION_NO} />
        <center>
          <h5>
            <b>
              <u>CIS (Interest Test)</u>
            </b>
          </h5>
        </center>
        <div className="p-4">
          <table className="table table-bordered">
            <thead className="p-2">
              <tr>
                <th colspan="2" className="text-center">
                  ITEMS
                </th>
                <th className="text-center">SCORE</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  ADMINISTRATIVE
                </td>
                <td className="p-2 text-center">1</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  ENTERPRISING
                </td>
                <td className="p-2 text-center">3</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  DEFENSE
                </td>
                <td className="p-2 text-center">10</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  SPORTS
                </td>
                <td className="p-2 text-center">10</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  CREATIVE
                </td>
                <td className="p-2 text-center">6</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  PERFORMING
                </td>
                <td className="p-2 text-center">1</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  MEDICAL
                </td>
                <td className="p-2 text-center">1</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  TECHNICAL
                </td>
                <td className="p-2 text-center">7</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  EXPRESSIVE
                </td>
                <td className="p-2 text-center">3</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  COMPUTATIONAL
                </td>
                <td className="p-2 text-center">10</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  HUMANITARIAN
                </td>
                <td className="p-2 text-center">1</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  EDUCATION
                </td>
                <td className="p-2 text-center">1</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  NATURE
                </td>
                <td className="p-2 text-center">1</td>
              </tr>
              <tr>
                <td colspan="2" className="p-2 text-center">
                  CLERICAL
                </td>
                <td className="p-2 text-center">3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />

      {/* 5th Page */}

      <div>
        <ReportHeader certificationNo={CERTIFICATION_NO} />
        {/* INTEREST SCORES GRAPH */}
        <Row>
          <Col md={18}>
            <center>
              <Chart
                chartLabel={"INTEREST SCORES"}
                chartlabelArray={INTERESTSCORELABEL}
                chartData={INTERESTSCOREDATA}
              />
            </center>
          </Col>
        </Row>
        <div>
          <p>
            Your child is still in a stage where he/she is exploring various
            career paths he/she needs to take. He/she needs help and guidance
            from parents and teacher so that he/she is able to develop and
            define his/her interest in various spheres and then makes a career
            choice accordingly.
          </p>
          <p>Regards,</p>
          <p>
            For & On behalf of
            <p>Myndkare</p>
            <p>Tamana Joon </p>
            <p>Clinical Psychologist</p>
          </p>
        </div>
      </div>

      {/* 6th Page */}
      <div>
        <ReportHeader certificationNo={CERTIFICATION_NO} />
        <Watermark content="CONFIDENTIAL">
          <div style={{ height: 500 }} />
        </Watermark>
      </div>
    </div>
  );
}

export default GenerateReport;
