import {Campaign} from "../tab-home/Campaign";

export interface Card {
  id: number;
  name: string;
  points: number;
  tier: number;
  campaign: Campaign;
}
