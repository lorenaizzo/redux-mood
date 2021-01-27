import React, { useState } from 'react';
import { connect } from 'react-redux';

function MoodForm(props) {

    const [mood, setMood] = useState('Contento');
    const [message, setMessage] = useState('');

    const handleChangeInput = (event) => {
        setMessage(event.target.value);
    }

    const handleChangeSelect = (event) => {
        setMood(event.target.value);
    }

    const handleClick = () => {
        props.onSave({mood: mood, message: message});
    }

    return (
      <div>
          <label>Estado de animo</label>
          <select value = {mood} name='mood'onChange={handleChangeSelect}>
            <option value='Contento'>Contento</option>
            <option value='Triste'>Triste</option>
            <option value='Ilusionado'>Ilusionado</option>
            <option value='Enojado'>Enojado</option>
          </select>

          <label>Mensaje</label>
          <input value={message} onChange={handleChangeInput} name="message"></input>
      
          <button onClick={handleClick}>Guardar</button>
      </div>
    );
}

const mapActionsToProps = (dispatch) => {
    return {onSave: (mood) => dispatch({type: 'ADD', data: mood})}
}

export default connect(null, mapActionsToProps)(MoodForm);