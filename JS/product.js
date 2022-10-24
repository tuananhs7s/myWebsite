$(document).ready(function () {

    $.ajax({
        type: 'POST',
        url: 'index.php',
        data: { dataX: '0' },
        success: function (response) {
            $(".maincontent").html(response);
        }
    });

    $("#all-item").css({
        "background-color": "black",
        "color": "white"
    });

    var oldid = "#all-item";

    function selectproducttype (id,xvx) {
        $(id).click(function () {
            $(oldid).css({
                "background-color": "white",
                "color": "black"
            });

            $(id).css({
                "background-color": "black",
                "color": "white"
            });

            oldid = id;

            $.ajax({
                type: 'POST',
                url: 'index.php',
                data: { dataX: xvx },
                success: function (response) {
                    $(".maincontent").html(response);
                }
            });
        })
    }

    selectproducttype ("#all-item", 0);
    selectproducttype ("#sonmongtay", 1);
    selectproducttype ("#dungcu", 2);
    selectproducttype ("#thietbi", 3);
})  