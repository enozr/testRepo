$(function () {
    $('#container').highcharts({

        chart: {
            type: 'area'
        },

        title: {
            text: ""
        },

        credits: {
            enabled: false
        },

        xAxis: {
            gridLineColor:  '#EFEFEF',
            gridLineWidth:  1,
            startOnTick:  false,
            categories: [2009, 2010, 2011, 2012, 2013, 2014]

        },

        yAxis: {
            gridLineColor:  '#EFEFEF',
            gridLineWidth:  1,
            // startOnTick:  false,
            labels: {
                formatter: function() {
                    return this.value + '%';
                }
            }
        },

        plotOptions: {
            area: {
                // stacking: 'normal',
                lineColor: '#FF5441',
                lineWidth: 2,
                fillColor: '#FFDDD9',
                fillOpacity: 0.5,
                marker: {
                    lineWidth: 1,
                    lineColor: '#fff',
                    fillColor: '#FF9100'
                }
            }
        },

        series: [{
            name: null,
            data: [49,68,35,73,68,85],
            tooltip: {
                pointFormat: '<b>{point.x}:{point.y}%</b>'
            }
        }]
    });
});