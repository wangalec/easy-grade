var AWS = require('aws-sdk');
AWS.config.update({
  region: "us-east-1",
});
const DynamoDB = new AWS.DynamoDB();

  export function addQuiz(testId, questions) {
    console.log(questions)
    const params = {
      TableName: "Quizzes",
      Item: {
        testId: { S: testId },
        questions: { S: questions },
      },
    };
  
    DynamoDB.putItem(params, function(err) {
      if (err) {
        console.error("Unable to add quiz", err);
      } else {
        console.log(`Successfully added quiz`);
      }
    });
  }

  export function submitQuiz(testId, score, answers) {
    const params = {
      TableName: "Responses",
      Item: {
        testId: { S: testId },
        score: {N: score},
        answers: { S: answers },
      },
    };
  
    DynamoDB.putItem(params, function(err) {
      if (err) {
        console.error("Unable to add response", err);
      } else {
        console.log(`Successfully added response`);
      }
    });
  }

  export async function getQuiz(testId) {
    console.log('testid ' + testId)
    const params = {
      FilterExpression: "testId = :testId",
      ExpressionAttributeValues: {
        ":testId": {S: testId}
      },
      ProjectionExpression: 'questions',
      TableName: "Quizzes",
    };
    const quizPromise = await DynamoDB.scan(params).promise();
      return quizPromise;
    }

  export function getTestIds() {
    const params = {
      TableName: "Quizzes",
    };
  
    DynamoDB.scan(params, function(err, data) {
      if (err) {
        console.error("Unable to get quiz", err);
      } else {
        console.log(`Successfully found quiz`);
        data.Items.forEach(function (element, index, array) {
          return element.testId;
        })
      }
    });
  }

  export function getResponses(testId) {
    const params = {
      FilterExpression: "testId = :testId",
      ExpressionAttributeValues: {
        ":testId": {S: testId}
      },
      ProjectExpression: "testId",
      TableName: "Responses",
    };
  
    DynamoDB.scan(params, function(err, data) {
      if (err) {
        console.error("Unable to get responses", err);
      } else {
        console.log(`Successfully found responses`);
        let items = [];
        data.Items.forEach(function (element) {
          items += element;
        })
        return items;
      }
    });
  }