export interface Game {
  Id: number,
  Titre: string,
  CheminImage: string,
  GameTypeCode: string,
  Favori: boolean
}

export interface ApiResponse {
  Complement: string;
  Sortie: {
    List: Game[]
  }
}

export interface ApiResponseUpdate {
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
