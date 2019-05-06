import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

import _ from 'lodash';

// import 'chartjs-plugin-labels';

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
            tooltips: {
                callbacks: {
                    label: function (item, data) {
                        console.log(item)
                        var label = data.datasets[item.datasetIndex].labels[item.index];
                        var value = data.datasets[item.datasetIndex].data[item.index];
                        return label + ': ' + value;
                    }
                }
            },
            plugins:{
                labels: {
                  render: 'label',
                  fontColor: 'white',
                  position: 'border'
                }
            },
            pieceLabel: {
                // mode 'label', 'value' or 'percentage', default is 'percentage'
                mode: 'label',
                // precision for percentage, default is 0
                precision: 0,
                // font size, default is defaultFontSize
                fontSize: 18,
                // font style, default is defaultFontStyle
                fontStyle: 'bold',
            
                // font family, default is defaultFontFamily
                fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            },
            animation: { animateScale: false },
            rotation: Math.PI * 0.3,
            legend: {
                labels: {
                    fontSize: 15
                },
                position: "bottom"
            }
        }
    };

    componentWillReceiveProps = ({filterValues, theme}) => {

        // First Layer Data
        // [ "Medication","Hypertension" ...]
        const mainTags = Object.keys(filterValues);

        // Second Layer Variables, the values of subTags in mainTag
        // [ "type1","type2", "indicator" ...]
        let subTagsNames = [];

        // Thrid Layer Variables, the value of the second layer
        // ["insulin", ....]

        let subTagsValuesNames = [];
        let subTagsValuesCounts = [];
        let thridLayerColors = [];
        // Second Layer Tags
        mainTags.forEach( (mainTagName, index) => {
            // Contains all the subtags name for current main Tag
            const subTagsTemp = _.pull(Object.keys(filterValues[mainTagName]), "doc_count");

            subTagsNames = subTagsNames.concat(subTagsTemp);     
            // Get Third Layer Names & Values
            subTagsTemp.forEach(subTagName => {
                Object.keys(filterValues[mainTagName][subTagName])
                    .forEach(value => {
                        subTagsValuesNames.push(value);
                        subTagsValuesCounts.push(filterValues[mainTagName][subTagName][value]);
                        thridLayerColors.push( this.state.color[index] );
                    })
            })
        });

        this.setState({
            data:{
                labels: mainTags,
                datasets:[
                {
                    label: subTagsValuesNames,
                    labels: subTagsValuesNames,
                    data: subTagsValuesCounts,
                    backgroundColor: thridLayerColors
                },
                {
                    label: subTagsNames,
                    labels: subTagsNames,
                    data: mainTags.map(tagName => filterValues[tagName].doc_count),
                    backgroundColor: this.state.color
                }
            ]
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
            <Doughnut data={this.state.data} options={this.state.option} >
            </Doughnut>
        )
    }
}

const mapStateToProps = ({filterValues,theme}) => ({filterValues,theme})
export default connect(mapStateToProps,null)(TagChart);