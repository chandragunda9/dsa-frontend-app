import axios from "axios";

export const apiClient = axios.create(
    {
        // baseURL: 'http://localhost:5000'
        baseURL: 'http://dsa-backend-application-env.eba-vr2ptug9.ap-south-1.elasticbeanstalk.com/'
    }
)