import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { MicrocreditModule } from './microcredit/microcredit.module';

@Module({
  imports: [UserModule, MicrocreditModule],
  // controllers: 
  // providers: 
})
export class AppModule {}
