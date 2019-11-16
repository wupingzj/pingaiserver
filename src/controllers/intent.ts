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
        return res.redirect("/error");
    }

    res.end(JSON.stringify({
        name: "welcome intent v0 - call server to get intent.. query paramte?"
    }));
};

export const listIntents = (req: Request, res: Response, next: NextFunction) => {
    // Intent.findOne({name: name}, (err, intent: any) => {
    //     if (err) {
    //         console.log("0. Failed to get a user");
    //         req.flash("errors", err);
    //         // return err;
    //     }

    //     if (!intent) {
    //         console.log("1. Failed to get a user");
    //         req.flash("errors", "1. Failed to get a user");
    //     }
    // });


    res.end(JSON.stringify(
        [
            {
                "name": "Welcome",
                "phrases": [
                    "hi",
                    "Hi there",
                    "hello"
                ]
            },
            {
                "name": "Book Hotel",
                "phrases": [
                    "I would like to book a hotel for my family",
                    "Check out hotel in Sydney",
                    "Can you help me with hotel booking?"
                ]
            },
            {
                "name": "Arrival City",
                "phrases": [
                    "I will arrive at Sydney",
                    "Sydney please",
                    "visit Brisbane"
                ]
            },
            {
                "name": "Arrival Date",
                "phrases": [
                    "I am arriving on 15 Oct",
                    "My family will get there on 15 Oct",
                    "15th Oct",
                    "from Brisbane on 15 October"
                ]
            },
            {
                "name": "Depature Date",
                "phrases": [
                    "I will be leaving on 18th September",
                    "I am going from 15 Oct",
                    "15th Oct",
                    "from Brisbane on 15 October"

                ]
            },
            {
                "name": "Budget",
                "phrases": [
                    "5 star is good for my family",
                    "My budget is a bit tight",
                    "$200-300 would be great",
                    "I am on budget",
                    "luxury please"
                ]
            }
        ]
    ));
};

