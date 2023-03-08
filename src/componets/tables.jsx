import axios from 'axios'

const ROCKET_API_BASE_URL = "http://localhost:8080/"

class RocketService{

    saveRocket(rocket){
        return axios.post(ROCKET_API_BASE_URL + "add", rocket);
    }
    
    // getRocket(id){
        
    // }
    
    getRockets(){
        return axios.get(ROCKET_API_BASE_URL + "show");
    }

    
}
export default new RocketService();