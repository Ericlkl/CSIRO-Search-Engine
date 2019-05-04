import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Chart} from 'chart.js';

class TagChart extends Component {

    componentWillReceiveProps = ({filterValues}) => {
        let tagChart = document.getElementById("TagChart").getContext("2d")

        const labels = Object.keys(filterValues);
        const datasets = [{
            label: 'Points',
            data: labels.map(tagName => filterValues[tagName].doc_count),
            backgroundColor: ['#f1c40f','#e67e22', '#16a085', '#2980b9','#44FFD1', '#556222', '#8c1515']
        }];

        const data = {
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels,
            datasets
        };

        let lineChart = new Chart(tagChart,{
            type: 'pie',
            data,
            options:{ animation: { animateScale: false }}
        });
    }

    render() {
        return (
            <canvas id="TagChart"/>
        )
    }
}

const mapStateToProps = ({filterValues}) => ({filterValues})
export default connect(mapStateToProps,null)(TagChart);