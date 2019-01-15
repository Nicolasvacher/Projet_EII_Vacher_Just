export interface Message {
  Code: string;
  Message: string;
}

export interface ApiResponseLogin {
  userId: string;
  Messages: Message[]
}
