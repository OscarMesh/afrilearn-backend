const Subject = require("../models/subject");

const getAllSubjectsStatic = async (req, res) => {
  const subjects = await Subject.find({});
  res.status(200).json({ subjects });
};

const getAllSubjects = async (req, res) => {
  const { name } = req.query;
  let query = {};
  if (name) {
    query = name ? { name: { $regex: name, $options: "i" } } : {};
  }
  try {
    const subjects = await Subject.find(query);
    res.status(200).json({ subjects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleSubject = async (req, res) => {
  const { id: subjectId } = req.params;
  try {
    const subject = await Subject.findOne({ _id: subjectId });
    res.status(200).json({ subject });
  } catch (error) {
    console, log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getSingleSubjectTopics = async (req, res) => {
  const { id: subjectId } = req.params;
  try {
    const subject = await Subject.findOne({ _id: subjectId });
    const topics = subject.topics;
    res.status(200).json({ topics });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// const getSingleSubjectTopic = async (req, res) => {
//   const { id: subjectId } = req.params;
//   const { id: topicId } = req.params;
//   try {
//     const subject = await Subject.findOne({ _id: subjectId });
//     const topic =  subject.topics.id(topicId);
//     res.status(200).json({ topic: topic });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Server Error" });
//   }
// };

module.exports = {
  getAllSubjectsStatic,
  getAllSubjects,
  getSingleSubject,
  getSingleSubjectTopics,
  // getSingleSubjectTopic
};
