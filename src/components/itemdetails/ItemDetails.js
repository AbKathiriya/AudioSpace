import React, {Component} from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import './itemdetails.css';

class ItemDetails extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={12} className='detailspage'><code></code></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ItemDetails;
