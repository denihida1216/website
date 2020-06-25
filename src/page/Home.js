import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {
  Link,
} from "react-router-dom";

class Home extends Component {
  render() {
    const item = [];
    const json = {
      '2020': [
        {
          'id': '1',
          'tanggal': '2020-01-01 00:00:00',
          'nama': 'Memperbaiki Laptop HP: COOLING FAN (902) ERROR',
          'path': '/blog/hp-cooling-fan/'
        },
        {
          'id': '2',
          'tanggal': '2020-01-02 00:00:00',
          'nama': 'Memperbaiki Laptop HP: COOLING FAN (902) ERROR',
          'path': '/blog/hp-cooling-fan/'
        },
        {
          'id': '3',
          'tanggal': '2020-01-03 00:00:00',
          'nama': 'Memperbaiki Laptop HP: COOLING FAN (902) ERROR',
          'path': '/blog/hp-cooling-fan/'
        },
      ],
      '2019': [
        {
          'id': '1',
          'tanggal': '2020-01-04 00:00:00',
          'nama': 'Memperbaiki Laptop HP: COOLING FAN (902) ERROR',
          'path': '/blog/hp-cooling-fan/'
        },
        {
          'id': '2',
          'tanggal': '2020-01-05 00:00:00',
          'nama': 'Memperbaiki Laptop HP: COOLING FAN (902) ERROR',
          'path': '/blog/hp-cooling-fan/'
        },
        {
          'id': '3',
          'tanggal': '2020-01-06 00:00:00',
          'nama': 'Memperbaiki Laptop HP: COOLING FAN (902) ERROR',
          'path': '/blog/hp-cooling-fan/'
        },
      ],
      '2018': [
        {
          'id': '1',
          'tanggal': '2020-01-07 00:00:00',
          'nama': 'Memperbaiki Laptop HP: COOLING FAN (902) ERROR',
          'path': '/blog/hp-cooling-fan/'
        },
        {
          'id': '2',
          'tanggal': '2020-01-08 00:00:00',
          'nama': 'Memperbaiki Laptop HP: COOLING FAN (902) ERROR',
          'path': '/blog/hp-cooling-fan/'
        },
        {
          'id': '3',
          'tanggal': '2020-01-09 00:00:00',
          'nama': 'Memperbaiki Laptop HP: COOLING FAN (902) ERROR',
          'path': '/blog/hp-cooling-fan/'
        },
      ],
    };

    Object.keys(json).forEach(function (key) {
      item.push(
        <tr>
          <td colspan="3">
            <h4>{key}</h4>
          </td>
        </tr>);
      json[key].forEach(vals => {
        item.push(
          <tr>
            <td className="p-1">
              <time className="text-secondary badge badge-default small" title={vals['tanggal'] + ' +0800 +0800'}>
                6 Jun <span className="d-none d-md-inline"> {key}</span>
              </time>
            </td>
            <td className="p-1">
              <Link className="text-dark" to={vals['path']}>{vals['nama']}</Link>
            </td>
          </tr>);
      });
    });
    return (
      <div>
        <h1>Arsip </h1>
        <div className="row">
          <div className="col-md-12">
            <Card key={'1'}>
              <CardBody className="p-0">
                <table className="table table-hover bg-white">
                  <tbody>
                    {item}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </div>
          {/* col end */}
        </div>
      </div>
    );
  }
}

export default Home;