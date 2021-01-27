import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function MoodList(props) {
    const [moodsHtml, setMoodsHtml] = useState([]);

    useEffect(()=> {
        const moodsHtmlAux = props.moods.map((aMood, index) => (
            <tr key={index}>
                <td>{aMood.mood}</td>
                <td>{aMood.message}</td>
            </tr>
        ));
        setMoodsHtml(moodsHtmlAux);
    }, [props.moods]);

    return (
        <table>
            <thead>
                <tr>
                    <th>Estado de animo</th>
                    <th>Mensaje</th>
                </tr>
            </thead>
            <tbody>
                {moodsHtml}
            </tbody>
        </table>
    );
}

const mapStateToProps = (state) => {
    return { moods: state}
}

export default connect(mapStateToProps, null)(MoodList);