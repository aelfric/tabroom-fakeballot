type TeamDebateEntry = {
    code: string
    side?: "Aff" | "Neg"
    speakers: {
        name: string,
        last: string,
        points?: number
    }[],
    comments?: string
}

type DebateRound = {
    entries: TeamDebateEntry[];
    winningEntry?: number;
    rfd?: string;
}