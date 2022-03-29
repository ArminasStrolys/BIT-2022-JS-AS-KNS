import React from 'react';

const Books = (props) => {
  console.log(props)
    return (
        <div style={{ marginTop: "20px" }} className="ui centered card">
        <p className="image" href="#">
          <img src={props.img} alt="no img - alt text" />
        </p>
        <div className="content">
          <p style={{textAlign: 'center'}} className="header" href="#">
            {props.title}
          </p>
          <div className="meta">
            <p><b style={{color:'darkGreen'}}>Autorius:</b> {props.author}</p>
            <p>Price: {props.price} euro</p>
            <p>Žanras: {props.type}</p>
          </div>
        </div>
      </div>
    );
}

export default Books;
