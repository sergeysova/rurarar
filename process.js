module.exports = {
  apps: [
    {
      name: 'rurarar',
      script: './bin/start.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
}
