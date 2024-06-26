const service = require("../../service/authRegisterService");


async function register(request, response) {
  try {
    const results = await service.registerUser(request.body);

    response.json({ data: results });
  } catch (error) {
    console.log(`Error querying database: ${error}`);

    response
      .status(error.statusCode ?? 500)
      .json({ data: { error: `${error.message}` } });
  }
}

module.exports = {
    register
  };