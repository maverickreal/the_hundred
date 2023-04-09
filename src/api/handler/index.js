const Utility = require('../../logic/utility/');

const validLatLong = (lat, long) => {
    const latRegex = /^-?([1-8]?[0-9]|90)\.{0,1}\d{0,}$/,
        longRegex = /^-?([1-9]|[1-9]\d|1[0-7]\d|180)\.{0,1}\d{0,}$/;
    return (latRegex.test(lat) && longRegex.test(long));
}

class Handler {
    static check(req, res) {
        try {
            const { latitude, longitude } = req.query;
            if (!validLatLong(latitude, longitude)) {
                return res.status(400).send({ error: 'A valid pair of latitude and longitude not found!' });
            }
            const inRange = Utility.isWithin100(latitude, longitude);
            if (!inRange) {
                return res.status(200).send('Not within 100m.');
            }
            return res.status(200).send('Within 100m.');
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }
    }
}

module.exports = Handler;