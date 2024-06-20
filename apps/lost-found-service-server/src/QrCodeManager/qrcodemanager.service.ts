import { Injectable } from "@nestjs/common";
import { QrCodeBatchInput } from "../qrCodeManager/QrCodeBatchInput";
import { QrCodeBatchOutput } from "../qrCodeManager/QrCodeBatchOutput";

@Injectable()
export class QrCodeManagerService {
  constructor() {}
  async GenerateBatchQrCodes(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async GenerateBatchQrCodesAction(args: QrCodeBatchInput[]): Promise<QrCodeBatchOutput[]> {
    throw new Error("Not implemented");
  }
}
