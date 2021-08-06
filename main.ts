import camelCaseKeys from "camelcase-keys"

type User = {
    Username: string;
    Address?: {
        City: string,
        Country: string
    }
}

const user: User = {
    Username: "test",
    Address: {
        City: "New York",
        Country: "United States"
    }
}

const payload = camelCaseKeys(user, {deep: true})


