export function getTwoRandomIntervals(max: number): [number, number] {
    const start = Math.floor(Math.random() * (max - 10))
    const end = start + 10
    return [start, end]
}