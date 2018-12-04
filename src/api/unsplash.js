import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9ae092dff7b5ee448935a3eeb403ee94f506aee644420e7e983ce73ce4cc22e7'
    }
})

