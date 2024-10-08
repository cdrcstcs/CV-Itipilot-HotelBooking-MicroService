import Booking from '../models/booking.js';
import User from '../models/user.js';
export const createBooking = async (req, res) => {
  const { price, address, city, bedroom, bathroom} = req.body;
  try {
    const newBooking = new Booking({
      price,
      address,
      city,
      bedroom,
      bathroom,
      userId:  (await User.findOne())._id,
    });
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Failed to create booking' });
  }
};
export const getAllUserBookings = async (req, res) => {
    try {
      const bookings = await Booking.find({userId: (await User.findOne())._id });
      res.status(200).json(bookings);
    } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ message: 'Failed to fetch bookings' });
    }
};  
export const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBooking = await Booking.findByIdAndRemove(id);
    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ message: 'Failed to delete booking' });
  }
};
