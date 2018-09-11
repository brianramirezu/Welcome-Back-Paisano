import React from "react";
import {Grid, Row, Col, Image} from "react-bootstrap";

const ResourceItem = props => (<Grid>
  <Row>
    <Col xs={12} sm={7} className="sidebar-section">
      <Image src={`https://i.imgur.com/${props.resource.logo}.jpg`} rounded="rounded"/>
      <p>
        {
          `${props.resource.name}
    ${props.resource.description}
    ${props.resource.url}`
        }{" "}
      </p>

    </Col>
  </Row>
</Grid>);
export default ResourceItem;
