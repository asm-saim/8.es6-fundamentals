// Movie Ticket Booking
// Function Name Must be: bookTicket
// একটি সিনেমা Booking App-এ Default ভাবে প্রতি Booking-এ 1টি Seat এবং Ticket প্রতি ৩00 টাকা ধরা হয়, যদি ইউজার আলাদা কিছু না দেয়। তোমার কাজ হলো ES6 Default Parameter দিয়ে এই System টি তৈরি করা।
// Input
// Function তিনটি Parameter গ্রহণ করবে — movie (String), seats (Number, default 1), pricePerSeat (Number, default 300)
// Output / নিয়ম
// Total ক্যালকুলেট করতে হবে seats × pricePerSeat
// Return করতে হবে: "<movie>: <seats> seat(s), Total ৳<total>"
// Validation
// Return "Invalid" যদি movie String না হয় অথবা seats/pricePerSeat Negative Number হয়।
const bookTicket = (name, seat = 1, cost = 300) => {
  if (typeof name !== "string" || seat <= 0) {
    return "Invalid";
  }

  let total = seat * cost;
  return `${name}: seats:${seat},Total ৳${total}`;
};
console.log(bookTicket("Dune", 2, 450));

// টেস্ট কেস
// Input                                Output
// bookTicket("Dune")                    Dune: 1 seat(s), Total ৳300
// bookTicket("Dune", 3)                 Dune: 3 seat(s), Total ৳900
// bookTicket("Dune", 2, 450)            Dune: 2 seat(s), Total ৳900
// bookTicket(123, 2)                    Invalid
