import type {TagProperties} from "./TagProperties";

export type ProjectProperties = {
    name: string;
    description: string;
    image: string;
    link: string;
    tags: TagProperties[];
};