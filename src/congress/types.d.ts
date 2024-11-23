
export type CongressEntry = {
  name: string;
  id: number;
  speeches: Speech[];
  rank?: number
};

export type Speech = {
  name?: string,
  topic?: string,
  comments?: string;
  po?: boolean,
  side?: "1" | "2",
  points?: number
};
