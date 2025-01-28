// Dữ liệu cho lì xì
const luckyData = [
    {
        message: "Chúc mừng năm mới! Chúc bạn một năm mới tràn đầy sức khỏe, hạnh phúc và thành công! 🎉🌟",
        image: "./img/1k_vnd.jpg",
        amount: "1,000 VNĐ 🤪"
    },
    {
        message: "Năm mới đến, chúc bạn vạn sự như ý, tài lộc dồi dào và gia đình ấm êm! 🧧💖!",
        image: "./img/2k_vnd.jpg",
        amount: "2,000 VNĐ"
    },
    {
        message: "Chúc bạn một năm mới an khang thịnh vượng, công việc thuận lợi, tình duyên viên mãn! 💼❤️",
        image: "./img/5k_vnd.jpg",
        amount: "5,000 VNĐ"
    },
    {
        message: "Tết đến, chúc bạn luôn nở nụ cười tươi, sức khỏe dồi dào, và hạnh phúc tràn ngập! 😊🎊",
        image: "./img/10k_vnd.jpg",
        amount: "10,000 VNĐ"
    },
    {
        message: "Chúc năm mới đem đến cho bạn nhiều niềm vui, những cơ hội mới và những thành công tuyệt vời! 🌸💪",
        image: "./img/20k_vnd.jpg",
        amount: "20,000 VNĐ"
    },
    {
        message: "Chúc bạn năm mới ngập tràn tiếng cười, chinh phục mọi thử thách và đạt được mọi ước mơ! 🏆🌟",
        image: "./img/50k_vnd.png",
        amount: "50,000 VNĐ"
    },
    {
        message: "Năm mới, chúc bạn một cuộc sống đầy sắc màu, công việc thăng tiến, tình yêu trọn vẹn! 🌈💼💖",
        image: "./img/100k_vnd.jpg",
        amount: "100,000 VNĐ"
    },
    {
        message: "Chúc bạn và gia đình một năm mới bình an, tài lộc vào như nước, gia đình hạnh phúc! 🏡🌊",
        image: "./img/200k_vnd.jpg",
        amount: "200,000 VNĐ"
    },
    {
        message: "Chúc bạn năm mới đầy niềm vui, sức khỏe dồi dào và những dự định mới đều thành công! ✨🎁",
        image: "./img/500k_vnd.jpg",
        amount: "500,000 VNĐ"
    },
    {
        message: "Tết đến xuân về, chúc bạn một năm an lành, thịnh vượng và luôn được yêu thương! 🏠💐",
        image: "./img/cainit.png",
        amount: "Cái nịt 🤣"
    },
    {
        message: "Năm mới, chúc bạn gặt hái được nhiều thành công, luôn mạnh khỏe và hạnh phúc! 🎯💥",
        image: "./img/meomayman.png",
        amount: "Chúc bạn may mắnhơn trong năm mới 🤣"
    },
    {
        message: "Một năm mới, chúc bạn luôn gặp may mắn, mọi điều tốt lành sẽ đến với bạn! 🍀🌱",
        image: "./img/nammoimayman.png",
        amount: "Năm mới may mắn hơn nhé 🤣"
    }
];

// Hàm tạo mảng trọng số dựa trên tỷ lệ
function createWeightedArray() {
    const weightedArray = [];
    const totalWeight = 1e8;

    luckyData.forEach((item, index) => {
        let weight = 0;
        if (["50,000 VNĐ", "100,000 VNĐ", "200,000 VNĐ", "500,000 VNĐ"].includes(item.amount)) {
            weight = 0;
        } else if (["10,000 VNĐ", "20,000 VNĐ"].includes(item.amount)) {
            weight = Math.ceil(totalWeight * 0.15);
        } else {
            weight = Math.ceil(totalWeight * 0.85 / 8);
        }

        for (let i = 0; i < weight; i++) {
            weightedArray.push(index);
        }
    });

    return weightedArray;
}

// Tạo mảng trọng số khi khởi tạo
const weightedIndices = createWeightedArray();

// Hàm mở lì xì với tỷ lệ được điều chỉnh
function openLuckyMoney() {
    const randomIndex = weightedIndices[Math.floor(Math.random() * weightedIndices.length)];
    const luckyItem = luckyData[randomIndex];

    document.getElementById("result").classList.remove("hidden");
    document.getElementById("image").src = luckyItem.image;
    document.getElementById("message").textContent = luckyItem.message;
    document.getElementById("amount").textContent = "Lì xì: " + luckyItem.amount;

    document.querySelector(".envelopes").style.display = "none";
}

// Hàm reset
function reset() {
    document.getElementById("result").classList.add("hidden");
    document.querySelector(".envelopes").style.display = "block";
}
