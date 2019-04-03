import { DateTime } from "ionic-angular";

export interface Game {
  Id: number,
  Titre: string,
  CheminImage: string,
  GameTypeCode: string,
  Favori: boolean
}

export interface ApiResponse { // interface for games, replace it with ApiResponseGame
  Complement: string;
  Sortie: {
    List: Game[]
  }
}

export interface ApiResponseUpdate { // interface for favorites
  Sortie: Infos,
  Complement: string,
  OK: false,
  Messages: Message[]
}

export interface Message {
  Code: string,
  Message: string
}

export interface Infos { // interface for user
  Id: string,
  UserName: string,
  Prenom: string,
  Nom: string,
  Money: number,
  Email: string,
  PasswordHash: string
}


export interface Tournament { // interface for tournament
  Id: number,
  Nom: string,
  DateDebut: Date,
  DateFin: Date,
  Localisation: string,
  GameId: number,
  EventId: number
}

export interface ApiResponseTournament { // interface for tournament
  Complement: string;
  Sortie: Tournament[]

}
