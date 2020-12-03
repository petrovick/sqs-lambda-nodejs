var AWS = require('aws-sdk')

const region = 'us-east-1'
const accessKeyId = ''
const secretAccessKey = ''

AWS.config.update({
    region,
    accessKeyId,
    secretAccessKey,
})

var sqs = new AWS.SQS({ apiVersion: '2012-11-05' })


const sendToSQS = async ({ messageBody }) => {
    return new Promise((resolve, reject) => {
        var params = {
            MessageBody: JSON.stringify(messageBody) /* required */,
            QueueUrl: 'https://sqs.us-east-1.amazonaws.com/123456789/queue-name-test',
        }
        sqs.sendMessage(params, function(err, data) {
        if (err) {
            reject(err)
        } else {
            resolve(data)
        }
        })
    })
}

sendToSQS({messageBody: { Aqui: 'tem', Sim: 'Um conteúdo', muito: 'Legal'}})