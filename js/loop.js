(function($){
    $(function(){
	function listRender(data){
	    var
	    wrapper = $('<div class="wrapper"></div>')
	    , section = $('<div class="section"></div>')
	    , header = $('<div class="header">' +
			 '<h3><a href="#" target="_blank"></a></h3><span></span>' +
			 '</div>')
	    , list = $('<div class="list"></div>')
	    , item = $('<a href="#" target="_blank"></a>')
	    , glist = $('.glist')
	    , hr = $('<hr>')
	    , _header
	    , _list
	    , _section
	    , i
	    , il
	    , j
	    , jl
	    , n;
	    
	    for (i in data) {
		glist.append(wrapper.clone());
	    }
	    il = $('.wrapper').length;
	    i = 0;
	    $('.wrapper').each(function(){
		if (i < il) {
		    for (j in data[i]) {
			_section = section.clone();
			$(this).append(_section);
			_section
			    .append(header.clone())
			    .append(list.clone());
			_header = _section.find('.header');
			_list = _section.find('.list');
			_header.find('h3 a').text(j);
			_header.find('span').text(data[i][j].num);
			for (n in data[i][j].list) {
			    if (data[i][j].list[n] === 'HR') {
				_list.prepend(hr.clone());
			    } else {
				_list.prepend(item.text(data[i][j].list[n]).clone());
			    }
			}
		    }
		}
		i++;
	    });
	};
	listRender(baixing);
    });
}(jQuery));
