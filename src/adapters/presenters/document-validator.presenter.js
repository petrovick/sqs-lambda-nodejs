module.exports = class DocumentValidatorPresenter {

  show = (dados) => {
    this.view = {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: dados.message,
            input: dados.event,
          },
          null,
          2
        ),
      };
  }
}