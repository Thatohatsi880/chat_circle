const service = require("../../service/authLoginService");


async function login(request, response) {
  console.log(service)
    try {
      const results = await service.loginUser(
        request.body.email,
        request.body.password
      );
  
      response.json({ data: results });
    } catch (error) {
      console.log(`Error querying database: ${error}`);
  
      response
        .status(error.statusCode ?? 500)
        .json({ data: { error: `${error.message}` } });
    }
  }

  module.exports = {
    login
  };
  