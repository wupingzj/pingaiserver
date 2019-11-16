import { Request, Response } from "express";
import { check, sanitize, validationResult } from "express-validator";
import { Intent } from "../models/Intent.model";
import { any } from "bluebird";
import { NextFunction } from "connect";

export const getIntent = async (req: Request, res: Response, next: NextFunction) => {
    await check("name", "Intent name is not valid").isEmail().run(req);
    await check("name", "Intent must not be empty").isLength({ min: 4 }).run(req);
    await check("confirmPassword", "Passwords do not match").equals(req.body.password).run(req);
    // eslint-disable-next-line @typescript-eslint/camelcase
    await sanitize("email").normalizeEmail({ gmail_remove_dots: false }).run(req);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        req.flash("errors", errors.array());
        return res.redirect("/signup");
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        req.flash("errors", errors.array());
        return res.redirect("/error");
    }

    res.end(JSON.stringify({
        name: "welcome intent v0 - call server to get intent.. query paramte?"
    }));
};

export const listIntents = (req: Request, res: Response, next: NextFunction) => {
    Intent.findOne({name: name}, (err, intent: any) => {
        if (err) {
            console.log("0. Failed to get a user");
            req.flash("errors", err);
            // return err;
        }

        if (!intent) {
            console.log("1. Failed to get a user");
            req.flash("errors", "1. Failed to get a user");
        }
    });


    res.end(JSON.stringify(
        [{
            name: "welcome intent"
        },
        {
            name: "Depature Airport"
        }]
    ));
};

