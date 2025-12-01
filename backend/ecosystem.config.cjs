module.exports = {
	apps: [
	   {
		name: "certi-pm-payments",
		script: "./index.js",
		cwd: "/home/certi-pm/backend",
		env: {
			NODE_ENV: "production",
			PORT: 5006,
		}
	  }
	]
      };
