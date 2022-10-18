import axios from 'axios';

const allBikes = async (state) => {
  const request = await axios.get('../api/db.json').then((res) => console.log(res.data));
  state(request.data)
};

export {
  allBikes
}