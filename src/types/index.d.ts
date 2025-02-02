export interface IMetadata {
    title: string;
    description: string;
    date: string;
    tags: string;
    image?: string;
}

export interface IArticle {
    metadata: IMetadata & {
        date: Date;
        tags: string[];
    };
    content: string;
}

export interface IProject extends IArticle {
    metadata: IMetadata & {
        date: Date;
        tags: string[];
        role: string;
        discontinued: string;
        url: string;
    };
}

export interface EducationLevel {
    institution_name: string;
    level: string;
    city: string;
    year_started: Date;
    year_graduated?: Date;
}

export interface Certificate {
    certificate_name: string;
    issued_by: string;
    issue_date: Date;
    expiration_date?: Date;
    description: string;
}

export interface OGImageDescriptor {
    url: string | URL;
    secureUrl?: string | URL;
    alt?: string;
    type?: string;
    width?: string | number;
    height?: string | number;
}

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

export interface IGithub {
    avatar_url: string;
}
