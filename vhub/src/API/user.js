import API, {Repository} from '.';

class UserRepository extends Repository {
    async login(username, password, opts={}) {
        try {
            const response = await API.get('login', {
                ...opts,
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