export const fetcher = <T extends unknown>(input: RequestInfo, init?: RequestInit): Promise<T> =>
    fetch(input, init).then(res => res.json());
