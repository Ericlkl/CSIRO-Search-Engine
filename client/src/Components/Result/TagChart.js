import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Doughnut } from 'react-chartjs-2';

import _ from 'lodash';

// import 'chartjs-plugin-labels';

function ColorLuminance(hex, lum) {

	// validate hex string
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;

	// convert to decimal and change luminosity
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}

	return rgb;
}

class TagChart extends Component {

    // State For the chart
    // You can modify the values for customizing the chart
    state = {
        // Data for the chart
        data: {},
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
        let firstLayerColors = [];
        // Thrid Layer Variables, the value of the second layer
        // ["insulin", ....]

        let subTagsValuesNames = [];
        let subTagsValuesCounts = [];
        let thridLayerColors = [];
        // Second Layer Tags
        mainTags.forEach( (mainTagName, index) => {
            // Contains all the subtags name for current main Tag
            let subTagsTemp = _.pull(Object.keys(filterValues[mainTagName]), "doc_count");

            // Put the Second Layer Names to the result array outside the loop
            subTagsNames = subTagsNames.concat(subTagsTemp.map(name => `${mainTagName}.${name}`));   

            // Create a Lighter Color for this Second layer element
            firstLayerColors.push(ColorLuminance("fc9272", 0.1 * index))  

            // Get Third Layer Names & Values
            subTagsTemp.forEach(subTagName => {
                Object.keys(filterValues[mainTagName][subTagName])
                    .forEach((value, index) => {
                        subTagsValuesNames.push(`${value}`);
                        subTagsValuesCounts.push(filterValues[mainTagName][subTagName][value]);
                        thridLayerColors.push(ColorLuminance("034e7b", 0.22 * index));
                    })
            })
        });

        this.setState({
            data:{
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
                    backgroundColor: firstLayerColors
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