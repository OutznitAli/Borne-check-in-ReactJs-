import openSocket from 'socket.io-client';

export default class WallWebSocket {
  socket = null;

  constructor(deviceUID, onSwipe, onFilterContent, onInvalidate, onReload, onUrlTaken, onDisconnect) {
    this.socket = openSocket(process.env.REACT_APP_SOCKET_IO_HOST);
    this.socket.on('connect', () => {
      this.socket.emit('register/app', {deviceUID});
    });

    this.socket.on('social/swipe', onSwipe);
    this.socket.on('filterContent', onFilterContent);
    this.socket.on('social/invalidate', onInvalidate);
    this.socket.on('social/reloadClient', onReload);
    this.socket.on('socialWall/urlTaken', onUrlTaken);
    this.socket.on('disconnect', onDisconnect);
  }

  emit = (topic, payload) => {
    this.socket.emit(topic, payload);
  };

  off = (topic) => {
    this.socket.off(topic);
  };

  disconnect = () => {
    this.off('social/invalidate');
    this.off('social/swipe');
    this.off('social/takeSelfie');
    this.off('disconnected');
    this.off('connect');
    this.socket.disconnect();
  };
}
