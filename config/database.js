module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '194.163.182.236'),
      port: env.int('DATABASE_PORT', 3307),
      database: env('DATABASE_NAME', 'md-website-db'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '9BE29157B2823347A31A142ABBDDD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
