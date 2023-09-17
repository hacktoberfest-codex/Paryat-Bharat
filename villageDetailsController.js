const Village = require("../villagedetalis");

exports.getAllVillage = async (req, res) => {
  try {
    const allvillages = await Village.find();
    res.status(400).json({
      message: "here is your data",
      allvillages,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
exports.postData = async (req, res) => {
  try {
    console.log(req.body);
    const newVillage = await Village.create(req.body);
    console.log(req.body);
    res.status(200).json({
      newVillage,
      message: "data added",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};