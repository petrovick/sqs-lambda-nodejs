'use strict';
const documentValidationAction = require('../action/document-validation')

module.exports.validator = async event => {
  console.log('Entrou no action')
  console.log(event)
  console.log('Entrou no action 2')
  const response = await documentValidationAction(event)
  return response
  
};
