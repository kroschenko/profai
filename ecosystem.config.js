module.exports = {
    apps: [
        {
            name: "profai",
            script: "node_modules/next/dist/bin/next",
            args: "start -p 3001", //running on port 3001
            watch: false,
        },
    ],
};