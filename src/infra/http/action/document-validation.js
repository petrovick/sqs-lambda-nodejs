const DocumentValidatorInteractor = require('../../../use-cases/document-validate/document-validator.interactor')
const DocumentValidatorController = require('../../../adapters/controllers/document-validator.controller')
const DocumentValidatorPresenter = require('../../../adapters/presenters/document-validator.presenter')


module.exports = async function (event) {
  const documentValidatorPresenter = new DocumentValidatorPresenter()
  const documentValidatorInteractor = new DocumentValidatorInteractor(documentValidatorPresenter)
  const documentValidatorController = new DocumentValidatorController(documentValidatorInteractor)
  await documentValidatorController.run(event)
  return documentValidatorPresenter.view
}