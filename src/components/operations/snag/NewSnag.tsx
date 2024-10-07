import { Button, Drawer, Form, Input } from "antd";
import MultiUpload from "../../global/MultipleUpload";
import { CustomLabel } from "../../global/Extras";

export default function NewSnag(props: { open: boolean; action: any }) {
  return (
    <Drawer
      footer={
        <div className="space-x-4 justify-end flex">
          <Button>Cancel</Button>
          <Button type="primary">Submit</Button>
        </div>
      }
      closeIcon={null}
      title="Report Snag"
      open={props.open}
      onClose={() => props.action(false)}
    >
      <Form layout="vertical">
        <Form.Item label="Customer Name" required>
          <Input />
        </Form.Item>
        <Form.Item label="Service" required>
          <Input />
        </Form.Item>
        <Form.Item label="Service Description" required>
          <Input />
        </Form.Item>
        <Form.Item
          label={
            <CustomLabel
              main={"Comment "}
              subText={"(Suggest Remedial Action)"}
            />
          }
          required
        >
          <Input />
        </Form.Item>
        <Form.Item
          label={
            <CustomLabel
              main={"Upload one or more files "}
              subText={"(Max: 10 files, 10mb each)"}
            />
          }
        >
          <MultiUpload files={[]} setFiles={undefined} />
        </Form.Item>
      </Form>
    </Drawer>
  );
}