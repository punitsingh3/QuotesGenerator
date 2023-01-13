function generate(){
    var quotes ={
        "-Albert Einstein" :'"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it beauty."',
        "-Jules Renard":'"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."'
    }

    var authors= Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)]

    var quote = quotes[author]

    document.getElementById("quote").innerHTML=quote;
    document.getElementById("author").innerHTML=author;

}