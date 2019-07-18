import API, {Repository} from '.';

class UserRepository extends Repository {
    async login(username, password) {
        try {
            const response = await API.get('login', {
                auth: {
                    username,
                    password
                }
            });
            return this.getData(response);
        } catch (e) {
            console.error(e);
        }
    }
}

const Users = new UserRepository('users');
export default Users;