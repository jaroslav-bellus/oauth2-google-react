export const dummyService = {
    list() {
        return fetch('/api/dummy', {
            credentials: "same-origin"
        })
            .then((response) => {
                return response.json();
            });
    },
}
