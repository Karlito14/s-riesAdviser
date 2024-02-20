import { BASE_URL, OPTIONS } from "../config/config";

export class seriesAdviserAPI {

    static async fetchTopRated() {
        const response = await fetch(`${BASE_URL}tv/top_rated`, OPTIONS);
        const result = await response.json();
        const populars = result.results;
        return populars;
    }

    static async searchSerie (name) {
        const response = await fetch(`${BASE_URL}search/tv?query=${name}`, OPTIONS);
        const result = await response.json();
        const series = result.results;
        return series;
    }
}