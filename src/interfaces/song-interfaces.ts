type uuidV4 = string;


export interface IChoir {
  id: uuidV4;
  choir: string;
};
export interface IParagraph {
  id: uuidV4;
  paragraph: string;
  chorusPos: [position: number, repeat?: number][];
};

export interface ISong {
  id: uuidV4;
  title: string;
  musicalNote: "do" | "re" | "mi" | "fa" | "sol" | "la" | "si";
  chorus: IChoir[];
  paragraphs: IParagraph[];
}
