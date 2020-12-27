import React, { Component } from "react";
import {
  CardHeader,
  CardBody,
  CardFooter,
  Col,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import * as moment from "moment";
import TokenManager from "../../components/auth/Token";
import Outcome from "../../components/elements/Outcome";
import ShadowCard from "../../components/layout/ShadowCard";
import Label from "../../components/layout/Label";

class EventCard extends Component {
  state = {
    gender: "",
  };
  
  toggleDropdownMenu() {
    this.setState({dropdownOpen: !this.state.dropdownOpen})
  }

  async updateEvent(outcome) {
    var token = await TokenManager.getInstance().getToken();
    await fetch(this.props.data._links.self.href.replace("{?projection}", ""), {
      method: "PATCH",
      headers: { "Content-Type": "application/json", "X-Auth": token },
      body: JSON.stringify({outcome}),
    })
    .then(e => this.props.refreshPool());
  }

  render() {
    return (
      <Col lg="3" md="6" sm="12" className={"mb-5"}>
        <ShadowCard className="card bg-light mb-3" style={{height: "100%", borderRight: "1px solid #dedede"}}>
          <CardHeader style={{borderBottomColor: "#f0f0f0", borderBottomWidth: 1, borderBottomStyle: "solid"}}>
            <strong style={{fontSize: "1.7em"}}>{this.props.data.event}</strong>
            <div style={{float: "right"}}><Outcome outcome={this.props.data.outcome}/></div>
            {!this.props.data.outcome && 
              <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={() => this.toggleDropdownMenu()} style={{float: 'right'}}>
                <DropdownToggle caret>
                  Imposta esito
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => this.updateEvent("win")}>Won</DropdownItem>
                  <DropdownItem onClick={() => this.updateEvent("1/2 win")}>1/2 Won</DropdownItem>
                  <DropdownItem onClick={() => this.updateEvent("1/2 lose")}>1/2 Lose</DropdownItem>
                  <DropdownItem onClick={() => this.updateEvent("lose")}>Lose</DropdownItem>
                  <DropdownItem onClick={() => this.updateEvent("void")}>Void</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            }
          </CardHeader>
          <CardBody className={"pb-0"}>
            <div style={{paddingLeft: 10, paddingRight: 10, display: "flex", flexWrap: "wrap"}}>
              {this.props.data.notes && <Col lg="12" className={"mb-3"}>
                <div><Label>Description</Label></div>
                <div>
                  <span style={{fontSize: "1.2em", minHeight: "50px"}} className={"text-truncate"}>
                    {this.props.data.notes}
                  </span>
                </div>
              </Col>}
              <Col lg="6" className={"mb-3"}>
                <div><Label><i className="icon-tag mr-2"></i>Evento</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.data.event}</span></div>
              </Col>
              <Col lg="6" className={"mb-3"}>
                <div><Label><i className="icon-magic-wand mr-2"></i> Proposta</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.data.proposal}</span></div>
              </Col>
              <Col lg="6" className={"mb-3"}>
                <div><Label><i className="icon-clock mr-2"></i>Data e ora</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{moment(this.props.data.eventDate).format("DD/MM/YYYY HH:mm")}</span></div>
              </Col>
              <Col lg="6" className={"mb-3"}>
                <div><Label><i className="icon-graph mr-2"></i>Quota</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{(this.props.data.quote / 100).toLocaleString("it-IT", {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></div>
              </Col>
              <Col lg="6" className={"mb-3"}>
                <div><Label><i className="icon-book-open mr-2"></i> Sport</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.data.sport}</span></div>
              </Col>
              <Col lg="6" className={"mb-3"}>
                <div><Label><i className="icon-notebook mr-2"></i> Competizione</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.data.competition}</span></div>
              </Col>
              <Col lg="6" className={"mb-3"}>
                <div><Label><i className="icon-symbol-female mr-2"></i><i className="icon-symbol-male mr-2"></i> Sesso</Label></div>
                <div><span style={{fontSize: "1.2em"}}>{this.props.data.gender.description}</span></div>
              </Col>
            </div>
          </CardBody>
          <CardFooter className="d-flex bg-light" style={{flexDirection: "row", justifyContent: "flex-start"}}>
              <Col lg="6" className="p-0">
                <Label style={{fontSize: "1em", display: "inline-block"}}>creato il {moment(this.props.data.createdOn).format( "DD/MM/YYYY" )}</Label>
              </Col>
              <Col lg="6" className="p-0" style={{flex: 1, flexDirection: "row", justifyContent: "flex-end", textAlign: "right"}}>
                <Label style={{fontSize: "1em", display: "inline-block"}}>modificato il {moment(this.props.data.updatedOn).format( "DD/MM/YYYY" )}</Label>
              </Col>
          </CardFooter>
        </ShadowCard>
      </Col>
    );
  }
}

export default EventCard;
