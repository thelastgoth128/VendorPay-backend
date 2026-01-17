import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './components/users/users.module';
import { ChatsModule } from './components/chats/chats.module';
import { ChatParticipantsModule } from './components/chat_participants/chat_participants.module';
import { MessagesModule } from './components/messages/messages.module';
import { TransactionsModule } from './components/transactions/transactions.module';
import { ReceiptsModule } from './components/receipts/receipts.module';

@Module({
  imports: [UsersModule, ChatsModule, ChatParticipantsModule, MessagesModule, TransactionsModule, ReceiptsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
