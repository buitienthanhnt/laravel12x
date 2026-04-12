import {type Pagination } from "../shareType/Pagination";

export interface ProductInterface {
    id: number;
    name: string;
    alias: string;
    image_path?: string;
    description?: string;
}

export interface ProductDetailInterface extends ProductInterface {
    attributes: unknown;
    galleries: {path: string}[];
}

export interface ProductPaginationInterface extends Omit<Pagination, 'data'> {
    data: ProductInterface[];
}
