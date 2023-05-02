module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/privacy': { page: '/privacy' },
      '/auth/google': { page: '/auth/google' }
    };
  },
  output: 'export',
  trailingSlash: true
};
