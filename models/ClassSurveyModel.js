const db = require('./conn');

class ClassSurveyModel {
    constructor(id, topic_name, topic_score) {
        this.id = id;
        this.topic_name = topic_name;
        this.topic_score = topic_score;
    }

    static async getAllTopicData() {
        try {
            const response = await db.any(
                `SELECT topic_name, ranking_title FROM topics
                    JOIN rankings
                    ON topics.topic_score = rankings.id
                ORDER BY topics.topic_name;
                `

            );
            console.log(response);
            return response;
        } catch (error) {
            console.error('ERROR: ', error);
            return error;
        }

    }

    static async updateRanking(topic, topic_score) {
        try {
            const response = await db.result(
                `UPDAT topics SET Topic_score`
            );

        } catch (error) {
            console.error("ERROR: ", error);
            return error;
        }
    }


}

module.exports = ClassSurveyModel;