//Business Logic



function movieRelease() {
  let ticketPrice1 = 0;
  let movies = [["Braveheart", 0], ["Tenet", 7], ["The Mandalorian", 7], ["Joker", 0]];
  console.log(movies);
  movies.forEach(function (movie) {
    movie.forEach(function (i) {
      //console.log(movie); //movie=0; movie=1;
      //console.log(ticket2.movieName);
      console.log(i)
      console.log(i[0]);

      if (ticket2.movieName === i) {
        ticketPrice1 = movies[movie][1];
        console.log(ticketPrice1);
      } else {
        return false;
      }
    });
  });
};


function timeOfDay() {
  let timeOfDay = [["12:00", 0], ["3:30", 0], ["5:15", 2], ["7:45", 2], ["9:00", 2];
  timeOfDay.forEach(function (time) {
    if (userTicket.movieTime === timeOfDay[time[0]]) {
      ticketPrice2 = timeOfDay[time[1]];//after 5.00 p.m. (full price)
    }
  });
}

function userAge(age) {
  let ages = ["Child", "Student", "Adult", "Senior"];
  ages.forEach(function (age) {
    if (userTicket.age === ages[1] || userTicket.age === ages[3]) {
      ticketPrice3 = -2;
    }
  });
}

//Ticket business logic

function Ticket(movieName, timeOfDay, userAge) {
  this.movieName = movieName;
  this.timeOfDay = timeOfDay;
  this.userAge = userAge;
}
let ticket1 = new Ticket("Braveheart", "12.00 p.m.", 10);
let ticket2 = new Ticket("Tenet", "04.00 p.m.", 35);
let ticket3 = new Ticket("The Mandalorian", "05.00 p.m.", 14);
let ticket4 = new Ticket("Joker", "09.00 p.m.", 65);

let totalTicketPrice = 0;
let ticketPrice1 = 0;
let ticketPrice2 = 0;
let ticketPrice3 = 0;

Ticket.prototype.calculateTicketPrice(function (ticket) {
  movieRelease(userTicket);
  timeOfDay(userTicket);
  userAge(userTicket);
  totalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
})otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
}) otalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
}
})