const countWords = () => {
    let charNum= document.getElementById('inputtext').value.length;
    let wordNum= document.getElementById('inputtext').value;
    wordNum = wordNum.match(/\w+/g);
    wordNum = wordNum.length;
    document.getElementById('showWord').innerHTML="Word Count: "+wordNum;
    document.getElementById('show').innerHTML="Character Count: "+charNum;
}