
module.exports =  class DocumentValidatorInteractor {
  constructor(_presenter) {
    this.presenter = _presenter
  }

  execute = async (event) => {
    console.log('Recebe o event aqui Mensagem nova rapá')
    console.log(event)
    console.log('Recebe o event aqui 222  Mensagem nova rapá')
    this.presenter.show(event)
  }
}
