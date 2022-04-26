import http from 'k6/http';

export let options = {
  insecureSkipTLSVerify: false,
  noConnectionReuse: false,
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 100,
      timeUnit: '1s',
      duration: '60s',
      preAllocatedVUs: 20,
      maxVUs: 200,
    },
  },
};

export default () => {
  http.get(`http://localhost:3004/products/:${Math.floor(Math.random() * 999999)}/styles`);
}


// k6 run server1/k6.js