//全选 不选 反选
	var oAll = $('.logoWarp-all');
	var oNoAll = $('.logoWarp-noall');
	var oTgAll = $('.logoWarp-toggleall');
	var oInp = $('.list_item>li>label>input');

	oAll.click(function() {
		oInp.each(function(index1, element1) {
			element1.checked = true;
		})
	});
	oNoAll.click(function() {
		oInp.each(function(index1, element1) {
			element1.checked = false;
		})
	});
	oTgAll.click(function() {
		oInp.each(function(index1, element1) {
			if(element1.checked == false) {
				element1.checked = true;
			} else {
				element1.checked = false;
			}
		})
	});