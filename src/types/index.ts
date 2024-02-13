export type SampleUserType = {
  id: number;
  name: string;
  email: string;
  age: number;
};

export type ScriptRequest = {
  name: String;
  body: String
}

export type GameMap = {
  id: Number;
  name: String;
  height: Number;
  width: Number;
  body: String;
  imageUrl: String;
}
export type Script = {
  scriptId: number;
  name: string;
  body: string;
}
