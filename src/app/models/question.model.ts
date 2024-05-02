import { Answer } from "./answer.model";
import { Tag } from "./tag.model";
import { User } from "./user.model";

export interface Question {
    id: number;
    title: number;
    description: string;
    answers: Answer[];
    tags: Tag[];
    postedAt: Date;
    updatedAt?: Date;
    postedBy: User;
    isAnonymous: boolean
}