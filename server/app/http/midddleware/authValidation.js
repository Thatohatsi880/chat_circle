const JWT = require('jsonwebtoken');


const authUserValidation = async (request, response, next) => {
  let token = request.header("authorization");

  if (!token) {
    return response.status(403).json({
      errors: [
        {
          msg: "Unauthorized",
        },
      ],
    });
  }

  token = token.split(" ")[1];

  try {
    const user = await JWT.verify(token, process.env.SECRET_KEY);

    request.user = user.email;

    next();
  } catch (error) {
    return res.status(403).json({
      errors: [
        {
          msg: "Unauthorized",
        },
      ],
    });
  }
};

module.exports = authUserValidation;