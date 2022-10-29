const pale = {
    name: ["이창민", "이재백", "한우석"],
    age: 23,
    male: true,
    female: false,
    hey: function(ㅋㅋ) {
        console.log("알빠노" + ㅋㅋ)
    }
};

pale.hey("ㅋㅋ");
pale.hey("ㅎㅎ");

function hey(name) {
    console.log(name + "멍청이");
}

hey("이창민");
hey("이재백");
hey("한우석");