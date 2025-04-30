/*****************************************************************
🎬 Part 1: Creating a Movie Object

Imagine you're building a streaming platform like Netflix or Shahid.

You need to describe a movie using an object. The movie has the following details:

- Title: "Everything Everywhere All at Once"
- Director: "Daniel Kwan and Daniel Scheinert"
- Release Year: 2022
- Genre: "Science Fiction"

✅ Task 1: Create an interface called `Movie` that defines the shape of a movie object.
           The interface should include the following required properties:
           - title (string)
           - director (string or array of strings)
           - releaseYear (number)
           - genre (string)

           And the following optional properties (use the `?` symbol):
           - duration (number)
           - rating (string)
           - reviews (array of review objects)

✅ Task 2: Create a variable named `movie` and assign it an object that matches the Movie interface.

✅ Task 3: Access the movie’s title using dot notation, and access the release year using bracket notation. 
           (You can log them using `console.log`)
******************************************************************/
// task 9

interface Review {
  reviewer: string;
  comment: string;
}

// task 1the interface movie
interface Movie {
  title: string;
  director: string | string[];
  releaseYear: number;
  genre: string;
  duration?: number;
  rating?: string;
  // reviews?: { reviewer: string; comment: string }[]; this is when defining an array of object {key: value} are for defining an object
  // adding [] will convert the defined object to a string of objects
  reviews?: Review[];
  // index signature: it allows to dynamically add new key-value pairs to an interface
  // why? to make my code more dynamic. when? when I don't know the key explicitly
  [key: string]: string | string[] | number | boolean | Review[] | undefined;
}

//task 2 variable object named movie

const movie: Movie = {
  title: "Iron Man",
  director: "John Favreau",
  releaseYear: 2008,
  genre: "Action",
};
//task 3 acessing the movies title and release year

console.log(movie.title);
console.log(movie["releaseYear"]);

/*****************************************************************
🛠️ Part 2: Updating the Movie Object

Now let’s say the movie got updated information and we want to add more details.

✅ Task 4: Add a new property to the `movie` object called `duration` and set it to 139 (minutes).

✅ Task 5: Add another property called `rating` and set it to "R".

✅ Task 6: Update the `releaseYear` from 2022 to 2023 since the movie had a new release.
******************************************************************/

// task 4
movie.duration = 139;
console.log(movie.duration);

// task 5
movie.rating = "R";
console.log(movie.rating);

// task 6
movie.releaseYear = 2009;
console.log(movie.releaseYear);

/*****************************************************************
📚 Part 3: Making the Object More Advanced

Let’s make our movie object even more flexible and realistic!

✅ Task 7: Change the `director` property so that it stores an array of two strings:
           ["Daniel Kwan", "Daniel Scheinert"]

✅ Task 8: Add a new property called `reviews` to the movie object.
           This should be an array of objects where each review has:
           - reviewer (string)
           - comment (string)

           Start with one review:
           {
             reviewer: "Film Critic",
             comment: "A wild, genre-bending masterpiece."
           }

✅ Task 9: Create a separate `Review` interface to describe the structure of each review.
           Then, update the `Movie` interface to use this `Review[]` for the `reviews` property.
******************************************************************/
// task 7
let movieDirecter = movie.director as string;
movie.director = [movieDirecter, "RDJ"];

//task 8
movie.reviews = [
  { reviewer: "Film Critic", comment: "A wild, genre-bending masterpiece." },
];
// here I defined values to the optional key in the Movie interface, one object is the first element of the array

console.log(movie.reviews[0].comment);
// how to access the nested array object values seprately? I need to acces the first element of the array first since it's array of objects the access the keys-values in an object

/*****************************************************************
🎁 Part 4: Index Signatures

Sometimes we want to create objects where the keys are not fixed ahead of time.
Index signatures allow us to define flexible object structures in TypeScript.

--- 
📺 Task 10: Platforms with Boolean Values

✅ Step 1: Modify the interface to allow for index signature so we can add new keys and values

✅ Step 2: Add a new key named 'FilmStudio' and the value should be a string (i.e "Paramount", "Pixar"...etc)

✅ Step 3: Add a new key named 'Cast' and the value should be a string array of the names of the actors in the movie (["Robin Williams", "Ryan Reynolds"])


**/
//task 10 step 1 done above

// step 2
movie.FilmStudio = "Marvel";
console.log(movie);

//step 3

movie.Cast = ["RDJ", "Samual L. Jackson", "Gwenth Paltro", "John Favearu"];
console.log(movie);
// ----------------------------everything under is extra practice in class----------------------------------------
// create an array "users" that contain user information
//name, age, email (optional)
// print only the name of each user as ***new array***

interface Users {
  name: string;
  age: number;
  email?: string;
}

const user: Users = {
  name: "Fatma Zamanan",
  age: 28,
};

const user2: Users = {
  name: "Amani Zamanan",
  age: 23,
};
const user3: Users = {
  name: "Noona",
  age: 9,
};
const user4: Users = {
  name: "Reema",
  age: 5,
};

let allUsers: Users[] = [user, user2, user3, user4]; // I can use all arrays methods on these objects

console.log(allUsers.length);
console.log(allUsers[0].name);

// adding new object to the array allUsers

allUsers.push({
  name: "Ayah Althaydi",
  age: 20,
  email: "athaydi@mof.gov.kw",
});

console.log(allUsers);

// using forEach method with an array of objects applies but doesn't modify the original array, no return
allUsers.forEach((user) => {
  console.log(`${user.name} is ${user.age} years old`);
});

// using map will apply a function to each object in the array and returns a new array with the modification
let UpdatedUsersEmail = allUsers.map((user) => {
  user.email = "BLAblaBLA";
  return user;
});
console.log("All users", UpdatedUsersEmail);

// using filter: filter objects based on a condition returns the passed values in a new array

let olderThan20 = allUsers.filter((item) => {
  if (item.age > 20) {
    return true;
  }
});

console.log("elderly: ", olderThan20[0].name);

// I can chain the methods by the dot operator after the }.map

// let olderThan19 = allUsers
//   .filter((item) => {
//     if (item.age > 19) {
//       return true;
//     }
//   })
//   .map((user) => {
//     user.email = "BLAblaBLA";
//     return user;
//   });

// I can encompass all the above with array of objects manipulation in an array

function userOlderThan(users: Users[], age: number): Users[] {
  let TempArray = users.filter((users) => {
    if (users.age >= age) {
      return true;
    }
  });
  return TempArray;
}

console.log(userOlderThan(allUsers, 18)); // I can use forEach to print just the names
