import { Card, CardBody } from "@nextui-org/react";

const Error = ({ err }) => {
  return (
    <div>
      <Card>
        <CardBody>
          <p>
            Some problem is found :{" "}
            <span className="font-bold">{err && err.message}</span>
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default Error;
