
/**
 * GET /intent
 * Intent form page
 */
module.exports.getIntent = (req, res) => {
    res.end(JSON.stringify({
        name: "welcome intent"
    }));
};
