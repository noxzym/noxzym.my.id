import { ExtendedRecordMap } from "notion-types";

export interface ILanyard {
    success: boolean;
    data: {
        spotify: {
            track_id: string;
            timestamps: {
                start: number;
                end: number;
            };
            song: string;
            artist: string;
            album_art_url: string;
            album: string;
        };
        listening_to_spotify: boolean;
        kv: Record<string, string>;
        discord_user: {
            username: string;
            public_flags: number;
            id: string;
            discriminator: string;
            bot: false;
            avatar: string;
        };
        discord_status: string;
        activities: [
            {
                type: number;
                timestamps: {
                    start: number;
                    end: number;
                };
                sync_id: string;
                state: string;
                session_id: string;
                party: {
                    id: string;
                };
                name: string;
                id: string;
                flags: number;
                details: string;
                created_at: number;
                assets: {
                    large_text: string;
                    large_image: string;
                };
            }
        ];
        active_on_discord_web: boolean;
        active_on_discord_mobile: boolean;
        active_on_discord_desktop: boolean;
    };
}

export interface IArticle {
    id: string;
    slug: string;
    title: string;
    tags: string[];
    image: string;
    description: string;
    isPublished: boolean;
    publishedTime: string;
    readTime: string;
    recordMap: ExtendedRecordMap;
}
z;

export type PageProps<T extends string | string[]> = {
    params: {
        slug: T;
    };
};

type SongImage = {
    url: string;
};

type SongArtist = {
    name: string;
};

type SongAlbum = {
    name: string;
    artists: Array<SongArtist>;
    images: Array<SongImage>;
};

type ExternalUrl = {
    spotify: string;
};

type SongItem = {
    name: string;
    album: SongAlbum;
    external_urls: ExternalUrl;
};

export type GetNowPlayingResponse = {
    is_playing: boolean;
    item: SongItem;
    currently_playing_type: string;
};

export type GetNowPlayingTransformed = {
    isPlaying?: boolean;
    album?: string;
    artist?: string;
    title?: string;
    url?: string;
    artworkUrl?: string;
};
