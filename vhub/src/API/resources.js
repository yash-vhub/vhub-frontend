import API, {Repository} from '.';

class ResourceRepository extends Repository {
    async getByName(name, config={}) {
        try {
            const response = await API.get(`${this.url}/search/findByNameContaining`, {
                ...config,
                params: {
                    ...config.params,
                    name
                }
            });
            return this.getData(response);
        } catch (e) {
            console.error(e);
        }
    }
}

const Resources = new ResourceRepository('resources');
export default Resources;