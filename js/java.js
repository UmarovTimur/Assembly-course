
$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__menu,.header__burger').toggleClass('active');
		$('body').toggleClass('lock');
		$('.info__title,.info__text').toggleClass('opacity');
	});
});

function ibg(){
		let ibg=document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}
}

ibg();





/*JS-функция записи информации в fonts.scss

function fontsStyle(params) {
	let file_content = fs.readFileSync(source_folder + '/scss/fonts.scss');
	if (file_content == '') {
		fs.writeFile(source_folder + '/scss/fonts.scss', '', cb);
		return fs.readdir(path.build.fonts, function (err, items) {
			if (items) {
				let c_fontname;
				for (var i = 0; i < items.length; i++) {
			let fontname = items[i].split('.');
			fontname = fontname[0];
			if (c_fontname != fontname) {
				fs.appendFile(source_folder + '/scss/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
			}
			c_fontname = fontname;
			}
		}
	})
	}
}

function cb() { }

*/