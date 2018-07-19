import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  DisabledInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin';

export const PostList = props => (
  <List {...props}>
    <Datagrid>
      <TextField label="ID" source="id" />
      <ReferenceField label="User" source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <TextField source="body" />
      <EditButton />
    </Datagrid>
  </List>
);
