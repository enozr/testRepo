require(['jquery','highcharts'], function($) {
    var xAxisData = [2009, 2010, 2011, 2012, 2013, 2014];
    var seriesData = [49, 68, 35, 73, 68, 85];

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
        legend: {
            enabled: false
        },

        xAxis: {
            gridLineColor:  '#EFEFEF',
            gridLineWidth:  1,
            startOnTick:  false,
            categories: xAxisData
        },

        yAxis: {
            gridLineColor:  '#EFEFEF',
            gridLineWidth:  1,
            startOnTick:  false,
            tickInterval: 25,
            title: {
                text: null
            },
            labels: {
                formatter: function() {
                    return this.value + '%';
                }
            }
        },

        plotOptions: {
            area: {
                // stacking: 'percent',
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
            name: "BISP",
            data: seriesData,
            tooltip: {
                pointFormat: '<b>{point.y}%</b>'
            }
        }]
    });
})