import React, { useEffect, useState } from "react";
import { Row, Col, Card, Dropdown } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import BASE_CONFIG from "../../store/config";
import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import { Form } from "react-bootstrap";

const  UserCards = (props) => {

  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    if (search.length < 3) {
      return;
    }
    submitSearch()
  }, [search]);

  const submitSearch = () => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/users/search/findByEmailStartingWith?email=" + search, {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((res) => {
            if (!res._embedded.users) {
              return;
            }

            setUsers(res._embedded.users);
          });
      });
  };

  const saveProfile = (user, roleValue) => {
    return TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        return fetch(user._links.self.href, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
          body: JSON.stringify({role: 'https://api.godobet.it/roles/' + roleValue}),
        })
        .then(() => submitSearch())
        .catch((error) => alert(error));
      });
  };

  return (
    <Aux>
      <Row className="mb-5" style={{ marginTop: "-0.85rem" }}>
        <Col>
          <Form.Control
            type="text"
            onChange={({ target }) => setSearch(target.value)}
            style={{ backgroundColor: "white", borderRadius: 4 }}
            placeholder={"Cerca utente per email..."}
            className={"border-0"}
          />
        </Col>
      </Row>
      <Row>
        {users && users.map(user => (<Col sm={3} className="tab-user-card">
          <Card className="user-card user-card-1">
            <Card.Header className="border-0 p-2 pb-0">
              
            </Card.Header>
            <Card.Body className="pt-0">
              <div className="user-about-block text-center">
                <Row className="align-items-end">
                  <Col className="text-left pb-3">
                  </Col>
                  <Col>
                  { user._embedded &&
                    user._embedded.media &&
                    user._embedded.media.filter((m) => m.mediaType === "avatar").length > 0 && (
                      <div
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          textAlign: "center",
                        }}
                      >
                        <img
                          src={
                            user._embedded.media
                              .filter((m) => m.mediaType === "avatar")
                              .sort((a, b) => b.id - a.id)[0].url
                          }
                          style={{
                            width: 140,
                            margin: 30,
                            height: 140,
                            borderRadius: 90,
                            objectFit: "cover",
                          }}
                          alt=""
                        />
                      </div>
                    )}
                  </Col>
                  <Col className="text-right pb-3">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="link"
                        id="dropdown-basic"
                        className="drp-icon text-muted"
                      >
                        <i className="feather icon-more-horizontal" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href={DEMO.BLANK_LINK} onClick={() => saveProfile(user, 4)}>
                          Converti in utente semplice
                        </Dropdown.Item>
                        <Dropdown.Item href={DEMO.BLANK_LINK} onClick={() => saveProfile(user, 5)} >
                          Converti in tipster
                        </Dropdown.Item>
                        <Dropdown.Item href={DEMO.BLANK_LINK} onClick={() => saveProfile(user, 6)}>
                          Converti in super admin
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Col>
                </Row>
              </div>
              <div className="text-center">
                <h6 className="mb-1 mt-3">{user.name} {user.lastName}</h6>
                <p className="mb-3 text-muted">{user.roleName}</p>
                <p className="mb-1">
                  {user.email}
                </p>
                <p className="mb-0"></p>
              </div>
              <hr className="wid-80 b-wid-3 my-4" />
            </Card.Body>
          </Card>
        </Col>))}
      </Row>
    </Aux>
  );
}

export default UserCards;
