var inputList = $('.c_B32639').parent().parent().next().find('input:text');
var selectList = $('select');
var jobfile = $('#oDivFileUploader_Object');
var radioSex = $("input[type='radio']:checked");

function changeTxt(txt, dom) {
	var val = dom.value ? dom.value : null,
		err = null;
	err = $(dom).parent().find('.err');
	//									console.log(dom.value,dom)
	if(val == '' || val == null) {
		err.text(txt);
		$check = false;
	} else {
		err.text('');
		$check = true;
	}
}
inputList.on('change input', function() {
	changeTxt('不能为空，请选择信息', this)
});
selectList.on('change select', function() {
	changeTxt('不能为空，请选择信息', this)
});
//文件上传
jobfile.on('select change input', function() {
							var val = this.files;
	var val = new FormData();
	val.append('file', jobfile[0].files[0]);
	//								var data = new FormData();
	//								data.append('file', $('input[type=file]')[0].files[0]);
	if(val != '' || val != undefined) {
		this.style.opacity = 1;
		jobObj.resumeFile = val;

	} else {
		this.style.opacity = 0;
	}
})
radioSex.on('change', function() {
	jobObj.sex = this.value;
})

function submitForm(type) {
	if(type != 'exit') {
		return false;
	}

	inputList.each(function(i) {
		changeTxt('不能为空，请填写完整信息', this)
	})
	selectList.each(function(i) {
		changeTxt('不能为空，请填写完整信息', this)
	})

	jobObj.sex = $("input[type='radio']:checked").val();
	//								jobObj.resumeFile = ("input#oDivFileUploader_Object").value;
	//出生日期
	var $birthDate = $('#birthDateY').val() + '/' + $('#birthDateM').val() + '/' + $('#birthDateD').val();
	var $graduateDate = $('#graduateDateY').val() + '/' + $('#graduateDateM').val();
	var $currCity = $('#currentCityIdP').val() + $('#currentCityId').val();
	var $currDate = new Date();
	jobObj.userid = Math.random() * 100000000,
		jobObj.name = inputList[0].value,
		jobObj.idNum = inputList[1].value,
		jobObj.granduateSchool = inputList[2].value,
		jobObj.email = inputList[3].value,
		jobObj.telPhone = inputList[4].value,
		jobObj.addressForHome = inputList[5].value,
		jobObj.address = $currCity,
		jobObj.birthDate = $birthDate,
		jobObj.graduteDate = $graduateDate,
		jobObj.createDate = $currDate.getFullYear() + '/' + $currDate.getMonth() + '/' + $currDate.getDay()
	//										jobObj.resumeFile =jobObj.resumeFile;
	console.log(jobObj)
	if($check) {
		$.ajax({
			url: $url,
			data: jobObj,
			type: 'POST',
			cache: false,
			processData: false,
			contentType: false,
			success: function(data) {
				//								            alert(data);
			}
		});
	}
}

//点击保存
$('.redBtn').click(function() {
	submitForm('exit');
})