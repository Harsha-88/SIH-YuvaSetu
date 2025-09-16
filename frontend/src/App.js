import { getData } from './api';

async function loadData() {
    const data = await getData('/your-backend-endpoint');
    console.log(data);
}

loadData();
