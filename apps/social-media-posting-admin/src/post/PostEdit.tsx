import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const PostEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AgentName" source="agentName" />
        <TextInput label="AgentPhone" source="agentPhone" />
        <TextInput label="Description" source="description" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
