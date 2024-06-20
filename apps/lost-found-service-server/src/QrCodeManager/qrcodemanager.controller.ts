import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { QrCodeManagerService } from "./qrcodemanager.service";
import { QrCodeBatchInput } from "../qrCodeManager/QrCodeBatchInput";
import { QrCodeBatchOutput } from "../qrCodeManager/QrCodeBatchOutput";

@swagger.ApiTags("qrCodeManagers")
@common.Controller("qrCodeManagers")
export class QrCodeManagerController {
  constructor(protected readonly service: QrCodeManagerService) {}

  @common.Get("/:id/generate-batch-qr-codes")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateBatchQrCodes(
    @common.Body()
    body: QrCodeBatchInput[]
  ): Promise<string> {
        return this.service.GenerateBatchQrCodes(body);
      }

  @common.Post("/generate-batch-qrcodes-action")
  @swagger.ApiOkResponse({
    type: QrCodeBatchOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateBatchQrCodesAction(
    @common.Body()
    body: QrCodeBatchInput[]
  ): Promise<QrCodeBatchOutput[]> {
        return this.service.GenerateBatchQrCodesAction(body);
      }
}
