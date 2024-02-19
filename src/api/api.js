import { BASE_URL, OPTIONS } from "../config/config";

export class seriesAdviserAPI {

    static async fetchPopular() {
        const response = await fetch(`${BASE_URL}tv/popular`, OPTIONS);
        const result = await response.json();
        const populars = result.results;
        return populars;
    }

    static async images() {
        const response = await fetch('https://api.themoviedb.org/3/tv/59941/images', OPTIONS);
        const result = await response.json();
        return result;
    }
}