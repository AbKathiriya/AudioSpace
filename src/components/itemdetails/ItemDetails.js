import React, {Component} from 'react';
import { Grid,Row,Col } from 'react-bootstrap';
import './itemdetails.css';
import SongBlock from '../songblock/SongBlock';

class ItemDetails extends Component {
  render() {
    return (
      <div>
      <div className='detailspage'>
      <SongBlock />
      </div>
      </div>
    );
  }
}

export default ItemDetails;
