// When size is submitted and color picked by the user, call makeGrid() and colorIn()
$("#sizePicker").submit(function(evt){
    evt.preventDefault();
    makeGrid();
    colorIn();
});

// Select size input
function makeGrid() {
    var row;
    var column;
    $("table tr").remove();
    row = $("#inputHeight").val();
    column = $("#inputWeight").val();
    for (var x = 1; x <= row; x++) {
        $("table").append("<tr></tr>");
        for (var y = 1; y <= column; y++) {
            $("tr:last").append("<td></td>");
        }
    }
 }
 //Select a color input
function colorIn() {
    var colorSelector;
    $('td').click(function() {
        colorSelector = $('#colorPicker').val();
        if($(this).attr('style')){
            $(this).removeAttr('style');
        }else{
            $(this).attr('style', 'background-color:' + colorSelector);
        }
    });
}
