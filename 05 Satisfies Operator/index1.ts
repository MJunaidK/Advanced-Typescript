type City = CityName | CityCoordinates;
type CityName = 'New York' | 'Mumbai' | 'Lagos';
type CityCoordinates = {
  x: number;
  y: number;
};

type User = {
  birthCity: City;
  currentCity: City;
};

const user: User = {
  birthCity: 'Mumbai',
  currentCity: { x: 6, y: 3 },
};

user.birthCity.toUpperCase();

// Match user variable to user type to solve the above issue

const user1 = {
  // birthCity: 'Beijing',
  birthCity: 'Mumbai',
  currentCity: { x: 6, y: 3 },
} satisfies User;

user1.birthCity.toUpperCase();
