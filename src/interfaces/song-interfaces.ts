type uuidV4 = string;

export interface ISong {
  id: uuidV4;
  title: string;
  musicalNote: "do" | "re" | "mi" | "fa" | "sol" | "la" | "si";
  chorus: [{
    id: uuidV4;
    choir: string;
  }];
  paragraphs: [{
    id: uuidV4;
    paragraph: string;
    chorusPos: [position: number, repeat?: number][];
  }];
}
