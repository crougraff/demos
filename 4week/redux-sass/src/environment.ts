const dev = {
  context: 'http://localhost:3000/'
}

const prod = {
  context: 'http://ec2-18-219-198-148.us-east-2.compute.amazonaws.com:3000/'
}

export const environment = process.env.NODE_ENV === 'production'
  ? prod
  : dev
