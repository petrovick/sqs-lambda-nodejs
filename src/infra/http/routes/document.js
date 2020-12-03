'use strict';
const documentValidationAction = require('../action/document-validation')

module.exports.validator = async event => {
  const response = await documentValidationAction(event)
  return response
  
};
