import { Request, Response } from "express";

/**
 * GET /intent
 * Intent form page
 */
// module.exports.getIntent = (req, res) => {
//     res.end(JSON.stringify({
//         name: "welcome intent"
//     }));
// };

export const getIntent = (req: Request, res: Response) => {
    res.end(JSON.stringify({
        name: "welcome intent v0"
    }));
};

export const listIntents = (req: Request, res: Response) => {
    res.end(JSON.stringify(
        [{
            name: "welcome intent"
        },
        {
            name: "Depature Airport"
        }]
    ));
};

