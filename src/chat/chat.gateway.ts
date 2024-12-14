/** @format */

import {
	ConnectedSocket,
	MessageBody,
	SubscribeMessage,
	WebSocketGateway,
} from '@nestjs/websockets';

import { ChatService } from './chat.service';
import { Socket } from 'socket.io';

@WebSocketGateway()
export class ChatGateway {
	constructor(private readonly chatService: ChatService) {}

	@SubscribeMessage('receiveMessage')
	async receiveMessage(
		@MessageBody() data: { message: string },
		@ConnectedSocket() client: Socket,
	) {
		console.log('receiveMessage');
		console.log(data);
		console.log(client);
	}

	// backend가 listening
	@SubscribeMessage('sendMessage')
	async sendMessage(@MessageBody() data: { message: string }, @ConnectedSocket() client: Socket) {
		// client가 listening
		client.emit('sendMessage', {
			...data,
			from: 'server',
		});
	}
}
