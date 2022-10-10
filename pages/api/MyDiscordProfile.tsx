import { NextApiRequest, NextApiResponse } from "next";

export default async function MyDiscordProfile(
    _: NextApiRequest,
    res: NextApiResponse
) {
    const request = await fetch(
        "https://api.lanyard.rest/v1/users/243728573624614912"
    ).catch(() => null);
    if (!request) {
        return res.send({ error: "Failed to fetch data from Lanyard API." });
    }
    const data = await request.json();
    if (!data) {
        return res.send({ error: "Failed to parse data from Lanyard API." });
    }
    if (data.error) {
        return res.send({ error: data.error });
    }
    return res.send(data);
}
