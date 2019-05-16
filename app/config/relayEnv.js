import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return fetch("https://api.github.com/graphql" , {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer ff1b7c8f525f8c66952ae1bb062cd07f25fe4ca7"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store
});

export default env; 