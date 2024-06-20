import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ItemTitle } from "../item/ItemTitle";

export const QrCodeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="code" source="code" />
        <ReferenceInput source="item.id" reference="Item" label="Item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="items"
          reference="Item"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ItemTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
