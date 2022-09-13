const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/covid',function(req,res){
        var request = require('request');
        var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=DrkIoi0xWItXV32T0KQHTSNcXq%2Fdvnwqc7s66bBmM7JbR9%2BqkdsGV425a9%2B34NH2A1%2FMzk5dtXKpZO6rUBAzFw%3D%3D&numOfRows=10&pageNo=1';
        var startDt = req.query.startCreateDt;
        var endDt = req.query.endCreateDt;
        url = url + "&startCreateDt=" + startDt +"&endCreateDt=" + endDt;
        var options = {
            'method': 'GET',
            'url': url,
            'headers': {
                'Cookie': 'clientid=020010017787'
    }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        res.send(response.body);
    });
})

app.get('/covid2',function(req,res){
    var request = require('request');
    var url = 'http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=DrkIoi0xWItXV32T0KQHTSNcXq%2Fdvnwqc7s66bBmM7JbR9%2BqkdsGV425a9%2B34NH2A1%2FMzk5dtXKpZO6rUBAzFw%3D%3D&numOfRows=10&pageNo=1';
    var startDt = req.query.startCreateDt;
    var endDt = req.query.endCreateDt;
    url = url + "&startCreateDt=" + startDt +"&endCreateDt=" + endDt;
    var options = {
        'method': 'GET',
        'url': url,
        'headers': {
            'Cookie': 'clientid=010084006586'
}
};
request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
});
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))