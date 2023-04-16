const express = require("express");
const router = express.Router();

const {
  getAllSubjectsStatic,
  getAllSubjects,
  getSingleSubject,
  getSingleSubjectTopics,
//   getSingleSubjectTopic,
} = require("../controllers/subjects");

router.route("/").get(getAllSubjects);
router.route("/:id").get(getSingleSubject);
router.route("/:id/topics").get(getSingleSubjectTopics);
// router.route("/:id/topics/:id").get(getSingleSubjectTopic);
router.route("/static").get(getAllSubjectsStatic);

module.exports = router;
