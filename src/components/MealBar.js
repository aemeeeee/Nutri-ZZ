import React, {useState, useEffect} from 'react';
import '../stylesheets/MealBar.css';
import {Link} from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';


const MealBar = (props) => {

  const [meal, setMeal] = useState(props.meal);
  const [totalCal, setTotalCal] = useState(props.totalCal)

  const options = {
    "breakfast" : {
      title: "Breakfast",
      emoji: "🍳",
    },
    "lunch" : {
      title: "Lunch",
      emoji: "🥗",
    },
    "dinner" : {
      title: "Dinner",
      emoji: "🍲",
    },
    "snacks" : {
      title: "Snacks",
      emoji: "🍐",
    },
  }

  useEffect(()=> {
    setMeal(props.meal);
    setTotalCal(props.totalCal);
  }, [props])


  return (
    <div className="mealbar">
      <div style={{ backgroundColor: '#ffddd6', padding: '10px 5px' }}>
        <Container className="custom-container">
          {/* <Row> */}
            <Col>
              <h2 className="mealbar-emoji">{options[meal].emoji}</h2>
            </Col>
            <Col className="mealbar-text">
              <Link to={`/meal/${meal}`} className="link">
                <h2>{options[meal].title}</h2>
              </Link>
            </Col>
            <Col className="mealbar-bottom">
              <h2>{totalCal} Calories</h2>
            </Col>
            <Col className="mealbar-button" style={{padding: 0}}>
              <Link to={`/meal/${meal}/search`}>
                <button >➕</button>
              </Link>
            </Col>
          {/* </Row> */}
        </Container>
      </div>
    </div>
  );
}

export default MealBar;