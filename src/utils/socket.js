import io from 'socket.io-client';
const socket = io();

export default socket;

export class SocketIO {
  // static _instance = null;
  // constructor() {
  //   if (!SocketIO._instance) {
  //     this.io = io();
  //     SocketIO._instance = this;
  //   }
  //   return SocketIO._instance;
  // }
  constructor() {
    this.io = io();
  }
}
