// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Web3 from 'web3';
const web3 = new Web3("wss://mainnet.infura.io/ws/v3/accaef31187947eea261471f2e8c9b1b");

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(web3.eth.accounts);
  res.status(200).json({ name: 'John Doe' })
}
