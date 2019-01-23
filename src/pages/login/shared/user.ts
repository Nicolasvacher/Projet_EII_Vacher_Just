export interface ApiResponseLogin {
  Sortie: Infos,
  Complement: string,
  OK: false,
  Messages: Message[]
}

export interface Message {
  Code: string,
  Message: string
}

export interface Infos {
  Id: string,
  UserName: string,
  Prenom: string,
  Nom: string,
  Money: number,
  Email: string,
  PasswordHash: string
}
