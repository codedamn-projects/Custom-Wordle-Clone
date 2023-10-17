// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/db/database'


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const words = await db.selectFrom('Word').selectAll().execute();

  res.status(200).json({ name: 'codedamn', words })


}
