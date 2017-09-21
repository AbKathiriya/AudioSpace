import React, {Component} from 'react';
import {Image,Grid,Row,Col } from 'react-bootstrap';
import './songblock.css';
import ic_download from '../../images/ic_download.png';
import ic_play from '../../images/ic_play.png';

class SongBlock extends Component{
  render(){
    return(
      <div>
        <div className='songBlock'>
          <Grid>
            <Row>
              <Col md={8} className='songPlay'>
                <Grid>
                  <Row>
                    <Col md={2}>
                      <Image src={ic_play} circle className='icon'/>
                      <Image src={ic_download} circle className='icon'/>
                    </Col>
                    <Col md={4}>
                      <div style={{marginBottom:10}}><span className='artistName'>Artist Name</span></div>
                      <span className='songTitle'>Song Title</span></Col>
                    <Col md={2}>
                      <div className='noOfDays'>
                        <span>No of Days</span>
                        <br/>
                        <br/>
                        <span className='tags'># tags</span>
                      </div>
                    </Col>
                    <Col md={4}></Col>
                  </Row>
                  <Row>
                    <Col md={12}></Col>
                  </Row>
                </Grid>
              </Col>
              <Col md={4} className='songArtWork'>
                <div className='artistPhoto'>
                  PHOTO
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default SongBlock;
