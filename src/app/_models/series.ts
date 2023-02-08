import { seriesPhoto } from "./seriesPhoto";

export class Series {

    id: number;
    name: string;
    photos: seriesPhoto[]
    constructor(series: Series) {
        this.id = series.id;
        this.name = series.name;
        this.photos = series.photos
    }
}