const mongoose = require("mongoose");

const villageSchema = new mongoose.Schema({
  villageName: {
    type: String,
    required: [true, "Tour must have a name"],
    trim: true,
    minlength: [5, "String length cannot be less than 10"],
    // maxlength: [100, "String length cannot be more than 30"],
  },
  address: {
    type: String,
    required: [true, "Tour must have duration"],
    trim: true,
  },
  nearbyCity: {
    type: String,
    required: [true, "Please write the nearby cities"],
  },
  state: {
    type: String,
    trim: true,
    required: [true, "State is needed"],
  },
  isFoodAvailable: {
    type: Boolean,
    default: false,
    required: [true, "It is must for us to know if you provide food"],
  },
  isAccomodation: {
    type: Boolean,
    default: false,
    required: [true, "It is must for us to know if you accomodate people"],
  },
  numberOfAccomodation: {
    type: Number,
    default: 0,
    // min: [1, "Accomodation cannot be less than 1"],
  },

  culturalActivity: {
    type: [String],
    required: true,
    trim: true,
  },
  travel: {
    type: Boolean,
    required: [true, "must include travel"],
  },
  travelExpense: {
    type: Number,
    required: [true, "Tour must have cover image"],
  },
  surroundingPlace: {
    type: [String],
    required: [true, "there must be surrounding place"],
  },
  totalBaseCharge: {
    type: Number,
    required: [true, "total Charge is must"],
  },
  villageId: {
    type: Number,
    required: [true, "it's required"],
  },
  contactPhone: { type: Number, required: [true] },
  altContactPhone: { type: Number },
  contactEmail: { type: String, required: [true] },
});

const Village = mongoose.model("villageDetails", villageSchema);

module.exports = Village;