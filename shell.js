document.getElementById('copyme').addEventListener('copy', function(e) {
    e.clipboardData.setData('text/plain', 
        'echo "aqui vai seu exploit >:)"\n'
    );
    e.preventDefault();
});
