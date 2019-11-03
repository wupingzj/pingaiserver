import { Request, Response } from "express"
import { check, validationResult } from "express-validator"

/**
 * GET /intent
 * Intent form page
 */
export const getIntent = (req: Request, res: Response) => {
    res.render("welcome", {
        name: "welcome intent"
    });
};
