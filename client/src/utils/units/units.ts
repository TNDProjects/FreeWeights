/*
 * This file is where we will handle all issues related to units of measure
 * Ex) converting Pounds (LBs) to Kilograms (KGs) or KGs to Lbs
*/

/* 
 * 1 LB = 0.453924 KGs 
 * 1 KG = 2.204623 LBs 
*/


//TODO: @Daws, please handle turning ConvertToKilograms + ConvertToPounds into functions that take both a string and number. 

export interface unit {
  Pounds: ["LB", "LBS", "lbs", "lb"],
  Kilograms: ["KG", "KGS", "kgs", "kg"]
}

const LBS_TO_KG: number = 0.453924;
const KG_TO_LBS: number = 2.204623;

export const ConvertToKilograms = (numberInPounds: number) => {
  return Math.round(numberInPounds * LBS_TO_KG);
}
export const ConvertToPounds = (numberInKilograms: number) => {
  return Math.round(numberInKilograms * KG_TO_LBS);
}

//TODO: Create a function that rounds down to the nearest possible weight increment 
//ex) We know that we won't ever lift a number like 313 so why give them a estimated max of 313?
// Ideally we round down to 310 (or 315) in that situation. 
// 

