module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fe79aa3bdf8b88f991c95910a6a80b8e'),
  },
});
