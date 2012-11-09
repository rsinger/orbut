function createTextQuery(query) {
	html = "<div class='row'><div class='span10'><div class='alert alert-warning'><h3>" + query + "</h3><input type='hidden' name='query[]' value='" + query + "' /></div></div></div>";
	$('#query-container').append(html)
}
$('.save-text-query').click(function(){
	createTextQuery($('#text-query-field').val() + ":" + $('#text-query-value').val());
});

function createTemporalFilter(filter, date) {
	html = "<div class='row'><div class='span10'><div class='alert alert-success'><h3>" + filter + "=" + date + "</h3><input type='hidden' name='"+ filter +"' value='" + date + "' /></div></div></div>";
	$('#query-container').append(html)
}
$('.save-temporal-query').click(function(){
	createTemporalFilter('temporal.'+$('#temporal-modifier').val(), $('#temporal-value').val());
});

$(function() {

    $('.btnNext').on('click', function() {
	    if(isLastTab())
	    {
	        $('#requestForm').submit();
	    }
	    else
	    {
	        nextTab();
	    }
        
    });
    $('a[data-toggle="tab"]').on('shown', function (e) {
        isLastTab();
    });
});

function nextTab() {
    var e = $('#tab li.active').next().find('a[data-toggle="tab"]');
    if(e.length > 0) e.click();
    isLastTab();
}

function isLastTab() {
    var e = $('#tab li:last').hasClass('active');
    if( e ) $('.btnNext').text('submit request').attr("class","btn btnNext btn-primary");
    else $('.btnNext').text('next step »').attr("class","btn btnNext");
    return e;
}