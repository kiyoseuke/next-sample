import { Talent } from "@/types/Talent";
import { promises as fs } from "fs";
import type { NextApiRequest, NextApiResponse } from 'next'

const getTalentList: () => Promise<Talent[]> = async () => {
  const json: string = await fs.readFile("resources/talent.json", { encoding: "utf8" });
  return JSON.parse(json);
};

export default async (request: NextApiRequest, response: NextApiResponse<Talent[]>) => {
  response.status(200)
    .json(await getTalentList());
}
