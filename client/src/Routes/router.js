import { lazy } from "react";

const AdminSchoolPage = lazy(() =>
  import("../pages/AdminSchoolPage/AdminSchoolPage")
);
const AdminStudentPage = lazy(() =>
  import("../pages/AdminStudentPage/AdminStudentpage")
);
const AdminExamPage = lazy(() =>
  import("../pages/AdminExamPage/AdminExamPage")
);
const AdminQuestionpage = lazy(() =>
  import("../pages/AdminQuestionsPage/AdminQuestionPage")
);

const routes = [
  {
    path: "/admin/school",
    exact: true,
    Component: AdminSchoolPage,
  },
  {
    path: "/admin/student",
    exact: true,
    Component: AdminStudentPage,
  },
  {
    path: "/admin/exam",
    exact: true,
    Component: AdminExamPage,
  },
  {
    path: "/admin/question",
    exact: true,
    Component: AdminQuestionpage,
  },
];

export default routes;
