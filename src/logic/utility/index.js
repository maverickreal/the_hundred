const lat2 = (process.env.LAT ? Number.parseFloat(process.env.LAT) : 25.48397907969846),
  lon2 = (process.env.LON ? Number.parseFloat(process.env.LON) : 78.5598889765131);

class Utility {
  static isWithin100(lat1, lon1) { // Haversine formula to compute the distance between two geolocation
    const earthRadius = 6371e3; // earth radius in meters
    const rad1 = lat1 * Math.PI / 180; // convert to radians
    const rad2 = lat2 * Math.PI / 180;
    const deltaRad = (lat2 - lat1) * Math.PI / 180;
    const deltaLambda = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(deltaRad / 2) * Math.sin(deltaRad / 2) +
      Math.cos(rad1) * Math.cos(rad2) *
      Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = earthRadius * c; // distance in meters
    console.log(distance);
    return (distance <= 100);
  };
}

module.exports = Utility;