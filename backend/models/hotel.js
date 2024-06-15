import mongoose from "mongoose";
const hotelSchema = new mongoose.Schema({
  price: Number,
  address: String,
  city: String,
  bedroom: Number,
  bathroom: Number,
  latitude: String,
  longitude: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
});
const Hotel = mongoose.model('Hotel', hotelSchema);
export default Hotel;
