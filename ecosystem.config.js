module.exports = {
  apps: [
    {
      name: 'rurarar',
      script: './bin/start.js',
      env: {
        NODE_ENV: 'production',
        PORT: 9012,
      },
    },
  ],
  deploy: {
    production: {
      user: "www",
      host: "lestad.top",
      ref: "origin/master",
      repo: "git@github.com:lestad/rurarar.git",
      path: "/home/www/top.lestad/rurarar",
      'post-deploy': 'npm install && npm run build && npm prune --production && pm2 startOrRestart ecosystem.config.js --env production',
    },
  },
}
