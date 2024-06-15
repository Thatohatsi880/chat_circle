const Joi = require('joi');

function validateRegister(request, response, next) {

    const schema = Joi.object({
        email: Joi.string().trim().required().email(),
        username: Joi.string().trim().required().min(2).max(30),
        password: Joi.string().trim().required().min(6).max(30),
        

    });

    const { error } = schema.validate(request.body, { abortEarly: false });
    
    if (error) {
        const errorDetails = error.details.map(function(detail) {
            const message = detail.message.split('"')[2].trim();

            const key = detail.context.key;

            return { [key]: `The ${key} field ${message}` };
        });

        return response.status(422).json({
            'data': {
                'error': {
                    'title': 'Validation error',
                    'message': errorDetails
                }
            }
        });
    }

    next();
}

module.exports = validateRegister;