// Code your solutions in this file
// Function to return an array of thank you messages for each name provided
function writeCards(names, event) {
  let thankYouMessages = []; // Initialize an empty array to store the messages

  // Loop through each name in the 'names' array
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(
      `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    );
  }

  return thankYouMessages; // Return the array of messages
}

// Function to count down from a provided number to zero, logging each number
function countDown(number) {
  // Loop from the provided number down to zero
  while (number >= 0) {
    console.log(number); // Log the current number
    number--; // Decrease the number by 1
  }
}

// Example usage:

// 1) Write cards:
const names = ["Alice", "Bob", "Charlie"];
const event = "birthday";
const messages = writeCards(names, event);
console.log(messages); // Output: ["Thank you, Alice, for the wonderful birthday gift!", "Thank you, Bob, for the wonderful birthday gift!", "Thank you, Charlie, for the wonderful birthday gift!"]

// 2) Count down:
countDown(5); // Output: 5, 4, 3, 2, 1, 0 (each on a new line)
