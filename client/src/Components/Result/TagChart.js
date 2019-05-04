import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Pie } from 'react-chartjs-2';

class TagChart extends Component {

    // State For the chart
    // You can modify the values for customizing the chart
    state = {
        // Data for the chart
        data: {},
        // Color for the chart, it will fill the proportion of each section
        color: ['#16a085', '#f1c40f','#e67e22', '#2980b9','#44FFD1', '#556222', '#8c1515'],
        // Other Specification for the chart
        option: { 
            animation: { animateScale: false },
            rotation: Math.PI * 0.3,
            legend: {
                labels: {
                    fontSize: 15
                }
            }
        }
    };

    componentWillReceiveProps = ({filterValues, theme}) => {
        const labels = Object.keys(filterValues);
        const datasets = [{
            label: 'Points',
            data: labels.map(tagName => filterValues[tagName].doc_count),
            backgroundColor: this.state.color
        }];

        this.setState({
            data:{
                labels,
                datasets
            },
            option:{
                legend:{
                    labels:{
                        fontColor: theme.chart.labelColor
                    }
                }
            }
        });
    }

    render() {
        return (
            <Pie data={this.state.data} options={this.state.option} />
        )
    }
}

const mapStateToProps = ({filterValues,theme}) => ({filterValues,theme})
export default connect(mapStateToProps,null)(TagChart);