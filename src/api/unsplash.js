import axios from 'axios';

//preconfig
//custom w/ default props
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID OY78ffadHp7Lch-DsIDgciVbaFKID3q49RpAdvq0ux4'
    }
});