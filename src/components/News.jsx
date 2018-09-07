import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
      <style>{'body { background-color: lightblue; }'}</style>
        <Image src="assets/rights.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
          <p> <h4>Article 10</h4>
  Habitants of the Republic may, for their protection, own guns and arms in their homes. Only arms approved by the Army may be owned, and federal law will state the manner in which they can be used (Firearms are prohibited from importation into the Republic without proper licensing and documentation. Foreigners may not pass the border with unlicensed firearms; the commission of such act is a felony, punishable by prison term.
</p>
<p>  <h4>Article 14</h4>
  Prohibits the enactment of ex post facto (retroactive) laws. All persons punished under the law are entitled to due process, punishments must follow what is dictated by written law. Note that due process under Mexican law is not the same as US law as Mexico is not a common law country.
</p>
<p>  <h4>Article 16</h4>
  "In cases of flagrante delicto, any person may arrest the offender and his accomplices, turning them over without delay to the nearest authorities." In other words, a citizen's arrest is allowed.</p>
<p><h4>Article 19</h4>
  Prohibits detention in excess of 72 hours (3 days) without formal charges. Mandates due process for imprisonable charges. Separate crimes discovered during an investigation must be charged separately. Mistreatment during detention by authorities, all discomforts that are inflicted without legal motive, and all fees or contributions (forced bribes) in jails are abuses that will be prohibited by law and curbed by the authorities.</p>
<p>  <h4>Article 20</h4>
Allows people charged to remain silent.</p>

  <p><h4>Article 22</h4>
  Cruel and unusual punishment is prohibited. Specifically, penalties of death, mutilation, infamy, marks, physical punishments, torments, excessive fines, confiscation of assets, and others are abolished.
  Confiscation of assets does not include the application of said assets to pay for civil responsibilities caused by a crime, or when used to pay taxes or other fines. Nor will it be confiscation when said assets are part of illegal activities, or when they are related to organized crime, or when proof of ownership cannot be established.
  5579083000907358</p>



            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/newpaper.jpg" />
              <p>talk about this headline </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
