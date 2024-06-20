import * as graphql from "@nestjs/graphql";
import { QrCodeBatchInput } from "../qrCodeManager/QrCodeBatchInput";
import { QrCodeBatchOutput } from "../qrCodeManager/QrCodeBatchOutput";
import { QrCodeManagerService } from "./qrcodemanager.service";

export class QrCodeManagerResolver {
  constructor(protected readonly service: QrCodeManagerService) {}

  @graphql.Query(() => String)
  async GenerateBatchQrCodes(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GenerateBatchQrCodes(args);
  }

  @graphql.Mutation(() => [QrCodeBatchOutput])
  async GenerateBatchQrCodesAction(
    @graphql.Args()
    args: QrCodeBatchInput[]
  ): Promise<QrCodeBatchOutput[]> {
    return this.service.GenerateBatchQrCodesAction(args);
  }
}
