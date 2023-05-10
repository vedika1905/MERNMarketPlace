import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProductsCarousel from './ProductsCarousel'

const DealsOfTheDay = () => {
  const today = new Date()
  const yyyy = today.getFullYear()
  let mm = today.getMonth() + 1 // Months start at 0!
  let dd = today.getDate()

  if (dd < 10) dd = '0' + dd
  if (mm < 10) mm = '0' + mm

  const formattedToday = dd + '/' + mm + '/' + yyyy

  return (
    <Row className="deals-of-the-day">
      <Col lg="3" className="title">
        <p>Deals of</p>
        <p> the Day</p>
        <p>{formattedToday}</p>
      </Col>
      <Col lg="9">
        <ProductsCarousel productsNumber="3" />
      </Col>
    </Row>
  )
}

export default DealsOfTheDay
