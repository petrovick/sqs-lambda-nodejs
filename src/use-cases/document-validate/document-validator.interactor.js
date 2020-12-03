
module.exports =  class DocumentValidatorInteractor {
  constructor(_presenter) {
    this.presenter = _presenter
  }

  execute = async (event) => {
    const response = {
      message: JSON.parse(event.Records[0].body),
      event
    }
    this.presenter.show(response)
  }
}
