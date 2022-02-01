module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c585730b345ff7bb82836745cf78d51b'),
  },
});
