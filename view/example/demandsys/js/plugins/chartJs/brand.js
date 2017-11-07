/**
 * Created by 333 on 2017/1/16.
 */


$(function () {
    var ctopaiqival = $("input[name='ctopaiqi']").val();
    if(ctopaiqival != undefined){
        var ctopaiqi = JSON.parse(ctopaiqival);
        var ctokaifaval = $("input[name='ctokaifa']").val();
        var ctokaifa = JSON.parse(ctokaifaval);
        var ctojiexiangval = $("input[name='ctojiexiang']").val();
        var ctojiexiang = JSON.parse(ctojiexiangval);
        var ctoyanqival = $("input[name='ctoyanqi']").val();
        var ctoyanqi = JSON.parse(ctoyanqival);
        $('#ctobrand').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: '项目看板'
            },
            subtitle: {
                //    text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    '一月',
                    '二月',
                    '三月',
                    '四月',
                    '五月',
                    '六月',
                    '七月',
                    '八月',
                    '九月',
                    '十月',
                    '十一月',
                    '十二月'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: '需求 (个)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} 个</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: '排期中',
                data: ctopaiqi
            }, {
                name: '开发中',
                data: ctokaifa
            }, {
                name: '已结项',
                data: ctojiexiang
            }, {
                name: '延期',
                data: ctoyanqi
            }]
        });
    }


    var itpaiqival = $("input[name='itpaiqi']").val();
    if(itpaiqival != undefined){
        var itpaiqi = JSON.parse(itpaiqival);
        var itkaifaval = $("input[name='itkaifa']").val();
        var itkaifa = JSON.parse(itkaifaval);
        var itjiexiangval = $("input[name='itjiexiang']").val();
        var itjiexiang = JSON.parse(itjiexiangval);
        var ityanqival = $("input[name='ityanqi']").val();
        var ityanqi = JSON.parse(ityanqival);
        //it
        $('#itbrand').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: '项目看板'
            },
            subtitle: {
                //    text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    '一月',
                    '二月',
                    '三月',
                    '四月',
                    '五月',
                    '六月',
                    '七月',
                    '八月',
                    '九月',
                    '十月',
                    '十一月',
                    '十二月'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: '需求 (个)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} 个</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: '排期中',
                data: itpaiqi
            }, {
                name: '开发中',
                data: itkaifa
            }, {
                name: '已结项',
                data: itjiexiang
            }, {
                name: '延期',
                data: ityanqi
            }]
        });
    }

    //
    var yewupaiqival = $("input[name='yewupaiqi']").val();
    if(yewupaiqival != undefined){
        var yewupaiqi = JSON.parse(yewupaiqival);
        var yewukaifaval = $("input[name='yewukaifa']").val();
        var yewukaifa = JSON.parse(yewukaifaval);
        var yewujiexiangval = $("input[name='yewujiexiang']").val();
        var yewujiexiang = JSON.parse(yewujiexiangval);
        var yewuyanqival = $("input[name='yewuyanqi']").val();
        var yewuyanqi = JSON.parse(yewuyanqival);
        //业务


        $('#jobbrand').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: '项目看板'
            },
            subtitle: {
                //    text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    '一月',
                    '二月',
                    '三月',
                    '四月',
                    '五月',
                    '六月',
                    '七月',
                    '八月',
                    '九月',
                    '十月',
                    '十一月',
                    '十二月'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: '需求 (个)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} 个</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: '排期中',
                data: yewupaiqi
            }, {
                name: '开发中',
                data: yewukaifa
            }, {
                name: '已结项',
                data: yewujiexiang
            }, {
                name: '延期',
                data: yewuyanqi
            }]
        });
    }

    //
    var personpaiqival = $("input[name='personpaiqi']").val();
    if(personpaiqival != undefined){
        var personpaiqi = JSON.parse(personpaiqival);
        var personkaifaval = $("input[name='personkaifa']").val();
        var personkaifa = JSON.parse(personkaifaval);
        var personjiexiangval = $("input[name='personjiexiang']").val();
        var personjiexiang = JSON.parse(personjiexiangval);
        var personyanqival = $("input[name='personyanqi']").val();
        var personyanqi = JSON.parse(personyanqival);
        $('#personbrand').highcharts({
            chart: {
                type: 'column'
            },
            title: {
                text: '项目看板'
            },
            subtitle: {
                //    text: 'Source: WorldClimate.com'
            },
            xAxis: {
                categories: [
                    '一月',
                    '二月',
                    '三月',
                    '四月',
                    '五月',
                    '六月',
                    '七月',
                    '八月',
                    '九月',
                    '十月',
                    '十一月',
                    '十二月'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: '需求 (个)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.0f} 个</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                name: '排期中',
                data: personpaiqi
            }, {
                name: '开发中',
                data: personkaifa
            }, {
                name: '已结项',
                data: personjiexiang
            }, {
                name: '延期',
                data: personyanqi
            }]
        });
    }
});

