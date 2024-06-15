const api = import.meta.env.VITE_API_URL;

export const createUser = async (body) => {

  try {

    const response = await fetch(`https://chat-circle-zib6.onrender.com/auth/register`, {
      method: "POST",
      body: body,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => res)

    return { response };

  } catch (error) {
    return error
  }

}

export const editUser = async (body, userId) => {
  try {

    const response = await fetch(`http://localhost:3011/user/${userId}`, {
      method: "PATCH",
      body: body,
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res)

    return { response };

  } catch (error) {
    return error
  }

}

export const getUsers = async () => {
  try {

    const response = await fetch(`${api}/user`)
      .then((res) => res.json())

    return response;

  } catch (error) {
    return error
  }
}

export const getUser = async (id) => {
  try {
    const response = await fetch(`${api}/user/${id}`)
      .then((res) => res.json())

    return response;

  } catch (error) {
    return error
  }
}


export const deleteUser = async (id) => {
  try {
    const response = await fetch(`http://localhost:3011/user/${id}`, {
      method: "DELETE"
    }).then((res) => res)

    return { response };

  } catch (error) {
    return error
  }

}