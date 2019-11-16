import mongoose from "mongoose";

export type IntentDocument = mongoose.Document & {
    id: number;
    name: string;
};

// type compareIntentFunction = (candidateIntent: Intent, callback: (err: any, isMatch: any) => {}) => void;

const intentSchema = new mongoose.Schema({
    name: String
}, { timestamps: true });

export const Intent = mongoose.model<IntentDocument>("Intent", intentSchema);
