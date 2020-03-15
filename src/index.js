window.URL = process.env.NODE_ENV === 'production' ? 'http://send-a-wish.19h47.fr/' : 'http://localhost:9000/';

require('js/app');

require.context('icons/', true);
require.context('jpg/', true);
