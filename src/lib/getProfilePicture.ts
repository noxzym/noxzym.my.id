import { IGithub, ILanyard } from "@/types";
import { ListBlobResultBlob } from "@vercel/blob";
import { getBlobs } from "./getBlobs";

export default async function getProfilePicture() {
    const blobs = await getBlobs<ListBlobResultBlob[]>({
        prefix: "images",
        pathname: "images/profile.png"
    });
    const profilePictureBlob = blobs[0] as unknown as ListBlobResultBlob | undefined;
    const profilePicture = profilePictureBlob?.url ?? null;

    const lanyardRequest = await fetch(
        "https://api.lanyard.rest/v1/users/243728573624614912"
    ).catch(() => null);

    const lanyardData: ILanyard | null = lanyardRequest?.ok
        ? await lanyardRequest?.json().catch(() => null)
        : null;

    const discordAvatar = lanyardData?.success
        ? `https://cdn.discordapp.com/avatars/243728573624614912/${lanyardData?.data.discord_user.avatar}.png?size=512`
        : null;

    const githubResult = await fetch("https://api.github.com/users/noxzym").catch(() => null);

    const githubData: IGithub | null = githubResult?.ok
        ? await githubResult?.json().catch(() => null)
        : null;

    const githubAvatar = githubData?.avatar_url ?? null;

    return [profilePicture, githubAvatar, discordAvatar];
}
