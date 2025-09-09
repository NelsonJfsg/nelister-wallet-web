export interface UserSession {
  accessToken:  string;
  refreshToken: string;
  user:         User;
}

export interface User {
  email:         string;
  userName:      string;
  firstName:     string;
  fatherSurname: string;
  motherSurname: string;
}
