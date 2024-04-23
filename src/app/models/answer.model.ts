import { User } from "./user.model";

export interface Answer{
    id: number;
    description: string;
    postedAt: Date;
    updatedAt?: Date;
    questionId: number;
    authorName: string;
}