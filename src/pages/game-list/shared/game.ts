export interface Game {
  Id: number;
  Titre: string;
  CheminImage: string;
  GameTypeCode: string;
}

export interface ApiResponse {
  Complement: string;
  Sortie: {
    List: Game[]
  }
}
