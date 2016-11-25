var script = document.createElement('script');
script.type = 'text/javascript'; script.async = true;
script.src = 'https://code.jquery.com/jquery-3.1.1.min.js';

script.onload = function(){
    var $ = jQuery;

    $('[id^=weektestbox_]')
    .css({ 
        display: 'block', 
        'margin-bottom': '3em' 
    })
    .has('span.test_subject')
    .each(function(){
        var $$ = $(this);

        var word = $$.find('input[name^=word_]').attr('value');
        var mean = $$.find('input[name^=mean_]').attr('value');

        $$.find('span.test_subject')
        .html(word + '<br>' + mean).css({
            'margin-left': '1em',
            'margin-bottom': '0.5em',
            'line-height': '28px'
        });
    });

    $('#voca').css('position', 'initial');
    $('.testcontain').css('border', 'initial');

    $('#voca').css('background-color', 'initial');
    $('.testcontain').css('background-color', 'initial');
    $('.clickbox').css('background-color', 'initial').text('');
};

document.getElementsByTagName('head')[0].appendChild(script);
