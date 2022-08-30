export interface FavouritedTweet {
  [key: string]: string
}

export interface UserToRegister {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}

export interface UserToLogin {
  email: string;
  password: string;
}

export interface User {
  name: string;
  email: string;
}
