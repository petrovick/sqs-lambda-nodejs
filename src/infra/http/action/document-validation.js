const DocumentValidatorInteractor = require('../../../use-cases/document-validate/document-validator.interactor')
const DocumentValidatorController = require('../../../adapters/controllers/document-validator.controller')
const DocumentValidatorPresenter = require('../../../adapters/presenters/document-validator.presenter')

const mock = {
  Records: [
    {
      messageId: 'e11ce709-9aac-49ec-9691-2b11e1f8f88a',
      receiptHandle: 'AQEBbG3Uhb6Qbvjx8VqWiOSJ8+6YsFb0nwaGxV1OUph/W+ZwShZsIHI28mYxg57PCqot7Zsx6UB4xEDOGORdccYbSUp8c1DUWmGTM5qb5abaKpaa2qapVV9n0Iu6s4VPocNnm9zwiCe3Hjh62rkoZQqJuYGZh15jXQ/jd5rxrE5ySig1qUC31HM+7qM3Fd/ktJ/yzAY8cFVvd9ymXt2bXv7z3ZtEGC14UfpFe/6nJcDvq9edeDCSPib7DWZlVAuk4HT6BNZVKbV/LKqh+f/KP5ubsvDGXuymZHoZHGD+riyHfvIFSQx6mRhPXSjDD3momboIWkpRwv0PyEYoMZOK+1ezCj1kjivrUQEnUFVpvpPhFL++v8TC1PtkNSct54r+IiKexZB9ljZA5lpIyjdm1uG5Jw==',
      body: '{"Aqui":"tem","Sim":"Um conteúdo","muito":"Legal"}',
      attributes: [Object],
      messageAttributes: {},
      md5OfBody: '608f978b43cd2e832f97e6fc2a666af6',
      eventSource: 'aws:sqs',
      eventSourceARN: 'arn:aws:sqs:us-east-1:419797208457:queue-name-test',
      awsRegion: 'us-east-1'
    }
  ]
}

module.exports = async function (event) {
  event = event || mock
  const documentValidatorPresenter = new DocumentValidatorPresenter()
  const documentValidatorInteractor = new DocumentValidatorInteractor(documentValidatorPresenter)
  const documentValidatorController = new DocumentValidatorController(documentValidatorInteractor)
  await documentValidatorController.run(event)
  return documentValidatorPresenter.view
}