function deleteRow(buttonElement) {
    // Tìm thẻ <tr> chứa nút "Xóa" vừa được nhấn
    const row = buttonElement.closest("tr");
    if (row) {
        row.remove(); // Xóa dòng tương ứng khỏi bảng
    }
}