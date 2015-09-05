var month = 0;
var monthEng = "";
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var voOld, voNew, comOld, comNew, addressOld, addressNew, meetingsOld, meetingsNew = ""; 
var voOldb, voNewb, comOldb, comNewb, addressOldb, addressNewb, meetingsOldb, meetingsNewb = ""; 
var floor1NameEn, floor1UrlEn, floor2NameEn, floor2UrlEn, area1 = "";
var floor1NameJa, floor1UrlJa, floor2NameJa, floor2UrlJa, area2 = "";
        
function makeDealJa1() {

    var x = `<pre>
&lt;div class="promo"&gt;
    &lt;div id="promo" style="width: 211px"&gt;&lt;strong&gt;${month}月限定オファー&lt;/strong&gt;
        &lt;div id="promoin"&gt;                 
            &lt;table&gt;
                &lt;tr&gt;
                    &lt;td&gt;バーチャルオフィス&lt;br /&gt;&lt;span class="oldprice"&gt;&yen;${voOld}&lt;/span&gt; &lt;strong&gt;&yen;${voNew}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;電話秘書代行 &lt;span class="oldprice"&gt;&yen;${comOld}&lt;/span&gt; &lt;strong&gt;&yen;${comNew}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;貸し住所 &lt;span class="oldprice"&gt;&yen;${addressOld}&lt;/span&gt; &lt;strong&gt;&yen;${addressNew}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;貸会議室 &lt;span class="oldprice"&gt;&yen;${meetingsOld}&lt;/span&gt; &lt;strong&gt;&yen;${meetingsNew}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
    </pre>`;  

    return x;
}

function makeDealJa2() {

    var x = `<pre>
&lt;div class="promo"&gt;
    &lt;div id="promo" style="width: 211px"&gt;&lt;strong&gt;${month}月限定オファー&lt;/strong&gt;
        &lt;div id="promoin"&gt;                 
            &lt;table&gt;
                &lt;tr&gt;
                    &lt;td&gt;バーチャルオフィス&lt;br /&gt;&lt;span class="oldprice"&gt;&yen;${voOldb}&lt;/span&gt; &lt;strong&gt;&yen;${voNewb}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;電話秘書代行 &lt;span class="oldprice"&gt;&yen;${comOldb}&lt;/span&gt; &lt;strong&gt;&yen;${comNewb}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;貸し住所 &lt;span class="oldprice"&gt;&yen;${addressOldb}&lt;/span&gt; &lt;strong&gt;&yen;${addressNewb}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;貸会議室 &lt;span class="oldprice"&gt;&yen;${meetingsOldb}&lt;/span&gt; &lt;strong&gt;&yen;${meetingsNewb}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt; 
    </pre>`;  

    return x;
}
        
function makeDealEn1(){
    var x = `<pre>
&lt;div class="promo"&gt;
    &lt;div id="promo" style="width: 211px"&gt;&lt;strong&gt;${monthEng} Special!&lt;/strong&gt;
        &lt;div id="promoin"&gt;
            &lt;table&gt;
                &lt;tr&gt;
                    &lt;td&gt;Virtual Office &lt;span class="oldprice"&gt;&yen;${voOld}&lt;/span&gt; &lt;strong&gt;&yen;${voNew}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;Communications &lt;span class="oldprice"&gt;&yen;${comOld}&lt;/span&gt; &lt;strong&gt;&yen;${comNew}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;Address &lt;span class="oldprice"&gt;&yen;${addressOld}&lt;/span&gt; &lt;strong&gt;&yen;${addressNew}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;Meetings &lt;span class="oldprice"&gt;&yen;${meetingsOld}&lt;/span&gt; &lt;strong&gt;&yen;${meetingsNew}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;             
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>`;  

    return x;
}

function makeDealEn2(){
    var x = `<pre>
&lt;div class="promo"&gt;
    &lt;div id="promo" style="width: 211px"&gt;&lt;strong&gt;${monthEng} Special!&lt;/strong&gt;
        &lt;div id="promoin"&gt;
            &lt;table&gt;
                &lt;tr&gt;
                    &lt;td&gt;Virtual Office &lt;span class="oldprice"&gt;&yen;${voOldb}&lt;/span&gt; &lt;strong&gt;&yen;${voNewb}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;Communications &lt;span class="oldprice"&gt;&yen;${comOldb}&lt;/span&gt; &lt;strong&gt;&yen;${comNewb}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;Address &lt;span class="oldprice"&gt;&yen;${addressOldb}&lt;/span&gt; &lt;strong&gt;&yen;${addressNewb}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
                &lt;tr&gt;
                    &lt;td&gt;Meetings &lt;span class="oldprice"&gt;&yen;${meetingsOldb}&lt;/span&gt; &lt;strong&gt;&yen;${meetingsNewb}&lt;/strong&gt;&lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;             
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>`;  

    return x;
}

function makePromoEn() {
    var x = `<pre>
&lt;div id="promo"&gt; 
    &lt;strong&gt; ${monthEng} Special!&lt;/strong&gt; 
    &lt;div id="promoin"&gt; 
        Get a reduced special price at &lt;a href="#${area1}" class="smooth"&gt; ${floor1NameEn}&lt;/a&gt;  Or &lt;a href="#${area2}" class="smooth"&gt; ${floor2NameEn}&lt;/a&gt; 
    &lt;/div&gt; 
&lt;/div&gt; 
</pre>`;
    
    return x;
}

function makePromoJa() {
    var x = `<pre>
&lt;div class="sc-content" id="promo"&gt;&lt;strong&gt;${month}月限定スペシャル!&lt;/strong&gt;
    &lt;div class="sc-content" id="promoin"&gt;
        &lt;a href="#${area1}" class="smooth"&gt;&lt;strong style="color: #494949;"&gt;${floor1NameJa}&lt;/strong&gt;&lt;/a&gt; または、&lt;a href="#${area2}" class="smooth" &gt;&lt;strong style="color: #494949;"&gt;${floor2NameJa}&lt;/strong&gt;&lt;/a&gt;を特別割引料金でお申込みいただけます。
    &lt;/div&gt;
&lt;/div&gt;
</pre>`;
    
    return x;
}

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getSelected() {
    var x = $('option:selected', this).val();
    return x;
}

function setVars() {
    month = $('#month').val();
    voOld = $("#price0").val();
    voNew = $("#price1").val();
    comOld = $("#price2").val();
    comNew = $("#price3").val();
    addressOld = $("#price4").val();
    addressNew = $("#price5").val();
    meetingsOld = $("#price6").val();
    meetingsNew = $("#price7").val();

    voOldb = $("#priceb0").val();
    voNewb = $("#priceb1").val();
    comOldb = $("#priceb2").val();
    comNewb = $("#priceb3").val();
    addressOldb = $("#priceb4").val();
    addressNewb = $("#priceb5").val();
    meetingsOldb = $("#priceb6").val();
    meetingsNewb = $("#priceb7").val();
    
    monthEng = months[month-1];
    var $x = $('#floor1 option:selected');
    var $y = $('#floor2 option:selected');
    area1 = $x.parent().attr('label').toLowerCase();
    area2 = $y.parent().attr('label').toLowerCase();
    floor1NameEn = $x.val();
    floor1UrlEn = "http://www.servcorp.co.jp/en" + $x.data('url');
    floor1NameJa = $x.attr('ja');
    floor1UrlJa = "http://www.servcorp.co.jp/ja" + $x.data('url');
    floor2NameEn = $y.val();
    floor2UrlEn = "http://www.servcorp.co.jp/en" + $x.data('url');
    floor2NameJa = $y.attr('ja');
    floor2UrlJa = "http://www.servcorp.co.jp/ja" + $x.data('url');
}

function showNames(floor1, floor2, floor1en, floor2en){
    $('#jaPage #floor1ja').html(floor1);
    $('#jaPage #floor2ja').html(floor2);
    $('#engPage #floor1en').html(floor1);
    $('#engPage #floor2en').html(floor2);
}

$(document).ready( function(){    
   
    var jaPage = $('#bottom #jaPage'),
        engPage = $('#bottom #engPage'),
        enTab = $('#enTab'),
        jaTab = $('#jaTab');

    enTab.click(function(){
        if(engPage.css('visibility', 'hidden')){
            jaPage.css('visibility', 'hidden');
            jaTab.removeClass('activeTab');
            engPage.css('visibility', 'visible');
            enTab.addClass('activeTab'); 
        }
    });
    jaTab.click(function(){
        
        if(jaPage.css('visibility', 'hidden')){
            engPage.css('visibility', 'hidden');
            enTab.removeClass('activeTab');
            jaPage.css('visibility', 'visible');
            jaTab.addClass('activeTab'); 
        }

    });
    
    $('select').click( function(){
        console.log($('option:selected', this).val());
    });
    
    $('#submit').click(function(){
        
        var x = "";
        var compare = true;
        
        // remove all classes from previous submit
        $("input").removeClass("active");
        $("#month").removeClass("active");
        $('#warning').innerHTML = "";
        // get the amount of text boxes minus the other input buttons
        var e = $('#left input').length - 2;
        console.log(e);
        // start the looping through the text boxes
        for(i=0; i <= e; i++){
            
            // get the value of the input
            x = $('input#price'+i).val();
            console.log(x);
            if(x == ""){
                compare = false;
                $('#price'+i).addClass('active');                
            } else if (check(x)===true) {
           // check to see that the input has commas
                $('input#price'+i).val(addComma(x)); // no commas? add them
            }

        }
        
        if( $('#month').val() === "" ){
            compare = false;
            $('#month').addClass('active');

        }
        
        $('#error').html("")
        $('#output_jp').html("")
        $('#output_en').html("")
        setVars();
        
        if( compare ){

            $('#box').children('p').hide();

            $('#output_jp').html(makePromoJa());
            $('#deal_jp').html(makeDealJa1());
            $('#deal_jpb').html(makeDealJa2());
            
            $('#output_en').html(makePromoEn());
            $('#deal_en').html(makeDealEn1());
            $('#deal_enb').html(makeDealEn2());

            showNames(floor1NameJa, floor2NameJa, floor1NameEn, floor2NameEn);

            $('#jaPage').children('p').fadeIn(2000);    
            $('#engPage').children('p').fadeIn(2000);    
            
            console.log(x);    
        } 
        else {
            $('#error').html("<strong>Please make sure all prices are filled correctly.</strong>")
        }
        
    });
});