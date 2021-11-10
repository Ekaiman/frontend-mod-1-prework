/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, likes, comments) {
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = likes;
    this.comments = comments;
  }
  addLikes() {
    this.numberOfLikes = this.numberOfLikes + newLikes;
  }
  addComments() {
    this.comments = this.comments + newComments;
  }

};

var firstTweet = new Tweet('Red Robin', 'Unlimited Fries', '12:34pm 10/08/2021', 45, 20);
console.log(firstTweet);

var newLikes = 20;
firstTweet.addLikes();
console.log(firstTweet);

var newComments = 83;
firstTweet.addComments();
console.log(firstTweet);


var secondTweet = new Tweet('Turing', 'Welcome', '8:00am 04/11/1999', 1638, 7);
console.log(secondTweet);

var newLikes = 3;
secondTweet.addLikes();
console.log(secondTweet);
