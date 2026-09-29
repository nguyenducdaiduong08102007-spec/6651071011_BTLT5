function tinhCanChi() {
    const inputVal = document.getElementById("yearInput").value.trim();
    const year = parseInt(inputVal);
    
    // Validate năm nhập vào
    if (inputVal === "" || isNaN(year) || year <= 0 || !Number.isInteger(Number(inputVal))) {
        alert("Vui lòng nhập một năm hợp lệ (số nguyên dương)!");
        document.getElementById("canChiResult").value = "";
        return;
    }
    
    // Mảng Thiên Can và Địa Chi tương ứng theo công thức Năm % 10 và Năm % 12
    const canArr = ["Canh", "Tân", "Nhâm", "Quý", "Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ"];
    const chiArr = ["Thân", "Dậu", "Tuất", "Hợi", "Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi"];
    
    const can = canArr[year % 10];
    const chi = chiArr[year % 12];
    
    document.getElementById("canChiResult").value = `${can} ${chi}`;
}