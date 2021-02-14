import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const createAnec = async (content) => {
    const getId = () => (100000 * Math.random()).toFixed(0);
    const object = {content, votes: 0, id: getId() };
    const response = await axios.post(baseUrl, object)
    return response.data;
}

const updateAnec = async (id) => {
    const anecs = await getAll();
    const anecToVote = anecs.find(anec => anec.id === id);
    const addedLike = {
        ...anecToVote,
        votes: Number(anecToVote.votes) + 1
    }
    const response = await axios.put(`${baseUrl}/${id}`, addedLike)
    return response.data
}
export default {
    getAll,
    createAnec,
    updateAnec
}