import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("QrCodeBatchOutputObject")
class QrCodeBatchOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    qrCode!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    itemName!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    itemDescription!: string;

    @Field(() => Date)
    @Type(() => Date)
    createdAt!: Date;
}

export { QrCodeBatchOutput as QrCodeBatchOutput };