import React from "react";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

const CreateTipButton = () => {

    return (
        <a href={"/dashboard/tipster/createTip"} >
            <Button variant={"default"} className={"bg-light"} title={"Crea tip"} >Crea tip</Button>
        </a>
    );
}

export default withRouter(CreateTipButton);