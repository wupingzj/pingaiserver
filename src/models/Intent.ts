import mongoose from "mongoose";
import { IntentResponse } from "./IntentResponse";
import { IntentPhrase } from "./IntentPhrase";

export type IntentDoc = mongoose.Document & {
    id: number;
    name: string;
    phrases: IntentPhrase[];
    responses: IntentResponse[];
};

const intentSchema = new mongoose.Schema({
    name: String
});

export const Intent = mongoose.model<IntentDoc>("Intent", intentSchema);