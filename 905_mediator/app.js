const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

const Chatroom = function() {
  let users = {}; // list of users
  
  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if (to) {
        // single user message
        to.receive(message, from);
      } else {
        // mass message
        for(key in users) {
          if(users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const mike = new User('mike');
const brad = new User('brad');
const sarah = new User('sarah');

const chatroom = new Chatroom();

chatroom.register(mike);
chatroom.register(brad);
chatroom.register(sarah);

brad.send('Hello sarah', sarah);
sarah.send('hello mike', mike)

mike.send('Hello everyone');