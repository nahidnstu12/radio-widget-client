interface RadioData {
  id: number,
  stationTitle: string,
  frequency:string,
  showStation?:boolean
}
export const radiodata:RadioData[] = [
  { id: 1, stationTitle: "Putin FM", frequency: "66,6" },
  { id: 2, stationTitle: "Dribble FM", frequency: "101,6" },
  { id: 3, stationTitle: "Doge FM", frequency: "66,6" },
  { id: 4, stationTitle: "Ballads FM", frequency: "99,6" },
  { id: 5, stationTitle: "Maximum FM", frequency: "143,2" },
];
