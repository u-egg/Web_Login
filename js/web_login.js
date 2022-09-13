// Login_5 버튼 클릭 이벤트

function btn_1_change(){
    $(".btn_1_off").attr("class", "btn_1_on")
    $(".btn_2_on").attr("class", "btn_2_off")
}

function btn_2_change(){
    $(".btn_1_on").attr("class", "btn_1_off")
    $(".btn_2_off").attr("class", "btn_2_on")
}