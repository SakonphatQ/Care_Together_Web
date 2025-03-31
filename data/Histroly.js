const history = [];

function addRecommendation(userId, recommendation) {
    const timestamp = new Date().toISOString();
    history.push({ userId, recommendation, timestamp, rating: null }); // เพิ่มฟิลด์ rating
}

function getRecommendations(userId, limit = 7) {
    return history
        .filter(entry => entry.userId === userId)
        .slice(-limit)
        .reverse();
}

function updateRecommendationRating(userId, timestamp, rating) {
    const recommendation = history.find(entry => entry.userId === userId && entry.timestamp === timestamp);
    if (recommendation) {
        recommendation.rating = rating;
    }
}

module.exports = { addRecommendation, getRecommendations, updateRecommendationRating };