const mongoose = require("mongoose");

const offreSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  categorie: String,
  price: String,
  region: String,
  views: {
    type: Number,
    default: 0
  },
  rating: {
    type: Number,
    default: 0
  },
  phone: String,
  description: String
});

let Offre = mongoose.model("Offre", offreSchema);

const findOffer = categorie => {
  return Offre.find({ categorie })
    .limit(3)
    .sort({ views: -1 });
};

const findOne = id => {
  return Offre.findOne({ _id: id });
};

const findAll = categorie => {
  return Offre.find({ categorie });
};

const findAllbyEmail = email => {
  return Offre.find({ email });
};
const findAllbyName = (firstName, lastName) => {
  return Offre.find({ firstName, lastName });
};

const addToDb = obj => {
  let offre = new Offre(obj);
  return offre.save(obj);
};

const findAndUpdate = id => {
  return Offre.findOneAndUpdate(
    { _id: id },
    { $inc: { views: 1 } },
    { useFindAndModify: false }
  );
};
const updateRating = (id, rating) => {
  return Offre.findOneAndUpdate(
    { _id: id },
    { rating },
    { useFindAndModify: false }
  );
};
const findAndDelete = (id, firstName, lastName) => {
  return Offre.findOneAndRemove(
    { _id: id },
    { useFindAndModify: false }
  ).then(data => this.findAllbyName(firstName, lastName));
};
module.exports.addToDb = addToDb;
module.exports.updateRating = updateRating;
module.exports.findOffer = findOffer;
module.exports.findAll = findAll;
module.exports.findOne = findOne;
module.exports.findAndUpdate = findAndUpdate;
module.exports.findAndDelete = findAndDelete;
module.exports.findAllbyEmail = findAllbyEmail;
module.exports.findAllbyName = findAllbyName;
