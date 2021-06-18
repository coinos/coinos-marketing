module.exports = {
  apps: [
    {
      name: "corporate",
      watch: ["src"],
      script: "build/index.js",
      env: {
        COMMON_VARIABLE: "true",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
