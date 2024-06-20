/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { QrCodeWhereUniqueInput } from "../../qrCode/base/QrCodeWhereUniqueInput";
import { Type } from "class-transformer";
import { QrCodeCreateNestedManyWithoutItemsInput } from "./QrCodeCreateNestedManyWithoutItemsInput";
import { EnumItemStatus } from "./EnumItemStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class ItemCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => QrCodeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QrCodeWhereUniqueInput)
  @IsOptional()
  @Field(() => QrCodeWhereUniqueInput, {
    nullable: true,
  })
  qrCode?: QrCodeWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => QrCodeCreateNestedManyWithoutItemsInput,
  })
  @ValidateNested()
  @Type(() => QrCodeCreateNestedManyWithoutItemsInput)
  @IsOptional()
  @Field(() => QrCodeCreateNestedManyWithoutItemsInput, {
    nullable: true,
  })
  qrCodes?: QrCodeCreateNestedManyWithoutItemsInput;

  @ApiProperty({
    required: false,
    enum: EnumItemStatus,
  })
  @IsEnum(EnumItemStatus)
  @IsOptional()
  @Field(() => EnumItemStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { ItemCreateInput as ItemCreateInput };
