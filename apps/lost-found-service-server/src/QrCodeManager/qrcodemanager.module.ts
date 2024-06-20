import { Module } from "@nestjs/common";
import { QrCodeManagerService } from "./qrcodemanager.service";
import { QrCodeManagerController } from "./qrcodemanager.controller";
import { QrCodeManagerResolver } from "./qrcodemanager.resolver";

@Module({
  controllers: [QrCodeManagerController],
  providers: [QrCodeManagerService, QrCodeManagerResolver],
  exports: [QrCodeManagerService],
})
export class QrCodeManagerModule {}
