export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const response = await fetch(
      `${process.env.BACKEND_URL}/place_trade/${req.body}`,
      {
        method: "POST",
      }
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }

    const result = await response.json();

    if (!result.return || result.return === "Symbol not found") {
      throw new Error("Failed to fetch data");
    }

    return res.status(200).json(result);
  }
}
