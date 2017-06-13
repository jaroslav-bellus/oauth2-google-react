const host = 'http://localhost:9000';
const loginUrl = `${host}/auth/login`;
const logoutUrl = `${host}/auth/logout`;

export const authenticationService = {
    isAuthenticated: false,
    authenticate() {
        fetch(loginUrl)
            .then((response) => {
                return this.isAuthenticated = true;
            });
    },
    signout(cb) {
        fetch(logoutUrl)
            .then((response) => {
                return this.isAuthenticated = false;
            });
    }
}
