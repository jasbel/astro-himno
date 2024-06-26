export interface Paragraphs {
  paragraph: string;
}
export interface Paragraph2 {
  id: string;
  paragraph: string;
  chorusPos: [pos: number, repeat?: number][];
}

export interface Chorus {
  choir: string;
  noPositions: number[];
}

export interface Choir2 {
  id: string;
  choir: string;
}

export interface Songs {
  id: string;
  num_song: string;
  title_es: string;
  description_es: string;
  // musicalNote: '_' | 'G|Sol' | 'A|La' | 'C|Do' | 'D|Re' | 'E|Mi' | 'B|Si' | 'F|Fa' | 'F#|Fa#' | 'C/D|DoRe'
  musicalNote: "_" | "G|Sol" | "A|La" | "C|Do" | "D|Re" | "E|Mi" | "B|Si" | "F|Fa" | "F#|Fa#" | "C/D|Do-Re";
  paragraphs: Paragraphs[];
  chorus: Chorus[];
}
export interface Song2 {
  id: string;
  code: string;
  title: string;
  musicalNote: "_" | "G|Sol" | "A|La" | "C|Do" | "D|Re" | "E|Mi" | "B|Si" | "F|Fa" | "F#|Fa#" | "C/D|Do-Re";
  chorus: Choir2[];
  paragraphs: Paragraph2[];
}
