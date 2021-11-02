const withSass = require('@zeit/next-sass');

module.exports = withSass({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/privacy': { page: '/privacy' },
      '/auth/google': { page: '/auth/google' }
    };
  }
});
