import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";

const CreateNewServiceButton = () => {
  return (
    <a href={"/dashboard/tipster/create-new"}>
      <Button variant={"default"} className={"bg-light"} title={"Crea tip"}>
        Crea servizio
      </Button>
    </a>
  );
};

export default withRouter(CreateNewServiceButton);
