import base64 from 'react-native-base64'

class WebClient {
  get_request = async (url)=> {
    try {
      const res = await fetch(url)
      if (res.status >= 200 && res.status < 300) {
        const jsonObject = await res.json();
        return jsonObject
      }

      throw {
        badCredentials: res.status == 401,
        unknownError: res.status != 401
      }
    } catch (err) {
      return (err)
    } 
  }

  authenticate = async (credentials)=> {
    const encodedAuth = base64.encode(`${credentials.email}:${credentials.password}`)

    try {
      const res = await fetch('https://api.github.com/user', {
        headers: {
          'Authorization': 'Basic ' + encodedAuth
        }
      })
      if (res.status >= 200 && res.status < 300) {
        const jsonObject = await res.json();
        return {userDetails: jsonObject}
      }

      throw {
        badCredentials: res.status == 401,
        unknownError: res.status != 401
      }
    } catch (err) {
      return (err)
    } 
  }
}

export default new WebClient()