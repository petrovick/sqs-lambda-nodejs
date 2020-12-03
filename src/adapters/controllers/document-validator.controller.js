module.exports = class DocumentValidatorController {
  constructor(_interactor) {
    this.interactor = _interactor
  }
  run = async(event) => {
    await this.interactor.execute(event)
  }
}
