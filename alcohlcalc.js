$('#submit').click(function(){
    
    var whisky_percent = $('input[name="alc_percent"]').val();
    
    var demand_percent = $('input[name="demand_percent"]').val();
    
    
    if(whisky_percent > 100 || alc_percent > 100){
        $('#result').text("正しくない値が入力されました。");
        $('#info').text("入力する値の上限値は100(%)です。");
    } else {
    
        //必要なアルコールの量を計算(cc)
        var alc_amount = 180 * (demand_percent / 100);
    
        //ウイスキーの量を計算
        var whisky_lit = alc_amount / (whisky_percent /100);
        whisky_lit = Math.floor(whisky_lit * 10)/10;
    
        var soda_lit = 180 - whisky_lit;
    
        var msg = '炭酸水：' + soda_lit + 'cc、ウィスキー：' + whisky_lit +'ccで'+ demand_percent +'%のハイボールができます';
    
        var soda_rate = Math.round((soda_lit * 10) / 180 * 10) / 10;
        var whisky_rate = Math.round((10 - soda_rate) * 10) /10;
    
        var info = "炭酸水：ウィスキー = " + soda_rate + " : " +whisky_rate;
    
        if(!(soda_lit >= 0)){
            $('#result').text("正しくない値が入力されました。");
            $('#info').text("ハイボールの度数はウィスキーの度数よりも小さい値を設定してください。");
        } else {
    
        $('#result').text(msg);
        $('#info').text(info);
        }
    
    }
});
