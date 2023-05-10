const {validationResult} = require('express-validator')

module.exports =  validator = (req,res,next) => {
  const errors = validationResult(req)

    // check if the validation passes, if not
    // return a json respond with an error message
    if (!errors.isEmpty()) {
      let field = errors.errors[0].param
      let message = errors.errors[0].msg
      let errorMessage = field + ' ' + message

      res.status(400).json({
        message: errorMessage,
        errors: errors
      })
    } else {
      next()
    }
}