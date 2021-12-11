import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import TokenManager from "../../App/auth/TokenManager";
import BASE_CONFIG from "../../store/config";
import Aux from "../../hoc/_Aux";
import LocaleNumber from "../../App/components/LocaleNumber";
import md5 from "md5";
import { Link, withRouter } from "react-router-dom";

const  Tipsters = () => {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    TokenManager.getInstance()
      .getToken()
      .then((jwt) => {
        fetch(BASE_CONFIG.API_URL + "/users/search/findByRole?role=https://api.godobet.it/roles/5", {
          headers: {
            "Content-Type": "application/json",
            "X-Auth": jwt,
          },
        })
          .then((e) => e.json())
          .then((users) => {
            if (users._embedded) {
              setUsers(users._embedded.users);
            }
          });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWinRatioForUser = user => {
    let pools = [];
    if (user._embedded.services) {
      user._embedded.services.forEach(service => service.pools.forEach(pool => pools.push(pool)));
      if (pools) {
        const winRatioVar = pools.filter((res) => {
          return res.outcome === "win";
        });
        return (winRatioVar.length / pools.length) * 100;
      }
    }

    return 0;
  };

  const getAvatar = currentUser => {
    if (!currentUser._embedded.media || currentUser._embedded.media.filter(m => m.mediaType === 'avatar').length < 1) {
      return "http://www.gravatar.com/avatar/" + md5(currentUser.email.toLowerCase().trim()) + "?s=150"
    }

    return currentUser._embedded.media.filter(m => m.mediaType === 'avatar').sort((a,b) => new Date(b.insertedOn).getTime() - new Date(a.insertedOn).getTime())[0].url;
  };

  return (
    <Aux>
      <Row className="mb-5" style={{ marginTop: "-0.85rem" }}>
        {users && users
          .filter(user => user.totalSubscribers >= 0 && user._embedded && user._embedded.services && user._embedded.services.length && user.username)
          .map(author => (<Col sm={4} className="tab-user-card"  key={author.id}>
            <Link to={`/tipsters/${author.userCode}`}>
              <Card>
                <Card.Body>
                  <div className="media align-items-center p-0">
                    <div className="text-center" style={{paddingRight: "10px"}}>
                      <img style={{objectFit: "cover" }} height="80px" width='80px' src={getAvatar(author)} alt={"User avatar"} />
                    </div>
                    <div>
                      <h3 className="m-0 text-bold">{author.username}</h3>
                      <span style={{color: "#2382e7"}}><i className={"fa fa-check-circle"} style={{border: "2px solid rgb(100 181 250 / 70%)", borderRadius: "100px"}}></i> {author.stripeAccountStatus}</span>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer style={{padding: "20px 30px"}}>
                  <Row style={{justifyContent: "space-between"}}>
                    <div style={{flexDirection: 'row', justifyContent: 'flex-start', flex: 1}}>
                      <div><strong>{author._embedded.services.length}</strong> <span className="text-muted m-b-5">{author._embedded.services.length === 1 ? 'Servizio' : 'Servizi'}</span></div>
                      <div><strong>{author.totalSubscribers}</strong> <span className="text-muted m-b-5">{author.totalSubscribers === 1 ? 'Iscritto' : 'Iscritti'}</span></div>
                    </div>
                    <div style={{flexDirection: 'row', justifyContent: 'flex-end', flex: 1}}>
                      <div style={{textAlign: 'right'}}><strong className={"" + ((author.profitFromServices >= 0) ? " text-success" : " text-danger")}><LocaleNumber amount={author.profitFromServices} symbol={"%"} /></strong> <span className="text-muted m-b-5">Profitto</span></div>
                      <div style={{textAlign: 'right'}}><strong><LocaleNumber amount={getWinRatioForUser(author)} symbol={"%"} /></strong> <span className="text-muted m-b-5">ROI</span></div>
                    </div>
                  </Row>
                </Card.Footer>
              </Card>
            </Link>
          </Col>))}
      </Row>
    </Aux>
  );
}

export default withRouter(Tipsters);
