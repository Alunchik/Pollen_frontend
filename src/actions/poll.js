import axios from "axios";


export const poll_post_request = async (username, email, password)=> {
    try {
        const response = await axios.post("http://localhost:8189/registration",
            {
                "email": email,
                "username": username,
                "password": password,
                "confirmPassword": password
            });
        alert(response.data)
    } catch (e) {
        alert(e)
        alert(e.data)
    }
}