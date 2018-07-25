const CONFIG = {
  baseURI: process.env.FLOOD_BASE_URI || '/',
  dbCleanInterval: 1000 * 60 * 60,
  dbPath: '/rtorrent/server/db/',
  floodServerPort: 3000,
  maxHistoryStates: 30,
  pollInterval: 1000 * 5,
  secret: process.env.FLOOD_SECRET || 'flood',
  scgi: {
    host: process.env.RTORRENT_SCGI_HOST || 'localhost',
    port: process.env.RTORRENT_SCGI_PORT || 5000,
    socket: process.env.RTORRENT_SOCK == 'true',
    socketPath: '/rtorrent/.session/rpc.sock'
  },
  ssl: process.env.FLOOD_ENABLE_SSL == 'true',
  sslKey: '/rtorrent/flood_ssl.key',
  sslCert: '/rtorrent/flood_ssl.cert'
};

module.exports = CONFIG;