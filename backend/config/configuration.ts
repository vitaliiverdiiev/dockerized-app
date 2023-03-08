export default () => ({
    port: parseInt(process.env.BACKEND_PORT, 10) || 6900,
    database: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
    }
})
